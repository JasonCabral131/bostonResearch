/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
  Text,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {Dashlogo} from '../../contants/images';
import {Apis} from '../../contants';
import * as RSSParser from 'react-native-rss-parser';
import moment from 'moment';
import {ScrollView, FlatList, View, HStack, Box} from 'native-base';
import UpperLoaderItem from './UpperRenderItem/UpperLoaderItem';
import UpperRenderItem from './UpperRenderItem';
import _ from 'lodash';
import { DashboardNewsProps } from '../../types';
import BottomRenderItem from './BottomRenderItem';
export default function Dashboard() {
  const [feedItems, setFeedItems] = useState<DashboardNewsProps[]>([]);
  const [loading, setLoading] = useState(false);
  const convertTimestampToTimeAgo = (timestamp: string) => {
    const publishedDate = moment
      .utc(timestamp, 'ddd, DD MMM YYYY HH:mm:ss ZZ')
      .local();
    const currentDate = moment();

    const timeDiffMinutes = currentDate.diff(publishedDate, 'minutes');

    let timeAgo;
    if (timeDiffMinutes < 60) {
      timeAgo = `${timeDiffMinutes} min read · ${timeDiffMinutes}m ago`;
    } else {
      const hoursAgo = Math.floor(timeDiffMinutes / 60);
      const minutesAgo = timeDiffMinutes % 60;
      timeAgo = `${hoursAgo}h read · ${minutesAgo}m ago`;
    }

    return timeAgo;
  };
  const extractImageSrc = (html: string) => {
    const regex = /<img.*?src=["'](.*?)["']/;
    const match = html.match(regex);
    if (match && match[1]) {
      return match[1];
    }
    return null;
  };
  useEffect(() => {
    const fetchRSSFeed = async () => {
      setLoading(true);
      try {
        const response = await fetch(Apis.bostonresearchFeedApi);
        const rssText = await response.text();
        const parsedRSS = (await RSSParser.parse(rssText)) as any;
        const items = _.isArray(parsedRSS.items)
          ? parsedRSS.items?.map((data: any) => {
              const author = _?.last(data?.authors) as any;
              const image = extractImageSrc(data?.content);
              const url = _?.last(data?.links) as any
              return {
                url: image,
                topic: data?.title,
                timeZone: convertTimestampToTimeAgo(data?.published),
                author: author?.name ? author : null,
                links: url.url
              } as DashboardNewsProps;
            })
          : [];
        setFeedItems(items);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error('Error fetching RSS feed:', error);
      }
    };

    fetchRSSFeed();
  }, []);


  const renderItemCallback = useCallback(({item}: any) => {
    return <UpperRenderItem {...item} />;
  }, []);
  const renderItem1Memozed = useMemo(
    () => renderItemCallback,
    [renderItemCallback],
  );
  const renderItem2Callback = useCallback(({item}: any) => {
    return <BottomRenderItem {...item} />;
  }, []) 
  const renderItem2Memozed = useMemo(() =>  renderItem2Callback, [renderItem2Callback])
  return (
    <View style={styles.container}>
      <ScrollView flex={1}>
        <View style={styles.flatlistview}>
          <View>
            <Image source={Dashlogo} style={styles.logo} />
            <Text style={styles.header}>Must you know today</Text>
            <Text style={styles.formatdate}>
              {moment().format('dddd, MMMM DD, YYYY')}
            </Text>
          </View>
          <View pl={7} flex={1}>
            <FlatList
              horizontal
              data={feedItems}
              renderItem={renderItem1Memozed}
              keyExtractor={(item, index) => index.toString()}
              flex={1}
              ItemSeparatorComponent={() => <Box pl={4} />}
            />
          </View>

          {loading ? (
            <HStack space={3} pl={7}>
              <UpperLoaderItem />
              <UpperLoaderItem />
            </HStack>
          ) : null}
        </View>
        <FlatList data={feedItems} renderItem={renderItem2Memozed} flex={1}  keyExtractor={(item, index) => index.toString()} />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
  logo: {height: 35, width: 35, margin: 25},
  header: {
    color: 'white',
    marginHorizontal: 25,
    fontSize: 40,
    justifyContent: 'space-around',
    fontFamily: 'PlayfairDisplay-Bold',
  },
  flatlistview: {
    height: Dimensions.get('window').height * 0.85,
    width: '100%',
    backgroundColor: 'black',
  },
  formatdate: {
    marginHorizontal: 25,
    fontSize: 20,
    color: 'grey',
    marginTop: 10,
    fontFamily: 'Manrope-Regular',
  },

});
