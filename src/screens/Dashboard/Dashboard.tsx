/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
export default function Dashboard() {
  const FlatlistValue = [
    {
      topic:
        'New approach to teaching computer science could broaden the subject ',
      image: 'https://picsum.photos/200/300',
      timeread: '5 min read',
      uploadedate: '31m ago',
      discription:
        'Despite growing demand for computer science skills in professional careers and many areas of life, K-12 schools struggle to teach computer science to the next generation New approach to teaching computer science could broaden the subjects appeal',
      link: 'https://bostonresearch.org/news/new-approach-to-teaching-computer-science-could-broaden-the-subjects-appeal/',
    },
    {
      topic:
        'Study proposes an acoustic approach for cheap and effective monitoring of glacier discharge ',
      image: 'https://picsum.photos/id/237/200/300',
      timeread: '5 min read',
      uploadedate: '1h ago',
      discription:
        'Acoustic signals can be effectively used for monitoring glacial runoff and provide a cheaper and more accessible alternative to existing methods.',
      link: 'https://bostonresearch.org/news/study-proposes-an-acoustic-approach-for-cheap-and-effective-monitoring-of-glacier-discharge/',
    },
    {
      topic:
        'What to say and what to avoid if you want to help teenagers combat exam anxiety ',
      image: 'https://picsum.photos/id/230/200/300',
      timeread: '3 min read ',
      uploadedate: '2h ago',
      discription:
        'What to say and what to avoid if you want to help teenagers combat exam anxiety.exams are under way and many students will be feeling the pressure to get the grades they need to pursue their education or employment goals.',
      link: 'https://bostonresearch.org/news/what-to-say-and-what-to-avoid-if-you-want-to-help-teenagers-combat-exam-anxiety/',
    },
    {
      topic:
        'AI is already being used in the legal system—we need to pay more attention to how we use it ',
      image: 'https://picsum.photos/id/231/200/300',
      timeread: '3 min read',
      uploadedate: '1h ago',
      discription:
        'AI is already being used in the legal system—we need to pay more attention to how we use it.Artificial intelligence (AI) has become such a part of our daily lives that its hard to avoid—even if we might not recognize it.',
      link: 'https://bostonresearch.org/news/ai-is-already-being-used-in-the-legal-system-we-need-to-pay-more-attention-to-how-we-use-it/',
    },
    {
      topic:
        'Gravitational wave detector LIGO is back online after 3 years of upgrades ',
      image: 'https://picsum.photos/id/232/200/300',
      timeread: '2 min read',
      uploadedate: '2h ago',
      discription:
        'Gravitational wave detector LIGO is back online after 3 years of upgrades.After a three-year hiatus, scientists in the U.S. have just turned on detectors capable of measuring gravitational waves—tiny ripples in space itself that travel through the universe.',
      link: 'https://bostonresearch.org/news/gravitational-wave-detector-ligo-is-back-online-after-3-years-of-upgrades/',
    },
  ];

  const renderItem = (item: any) => {
    return (
      <View style={styles.renderItemView}>
        <Image source={{uri: item.item.image}} style={styles.image} />
        <View style={styles.box1}>
          <Text numberOfLines={2} ellipsizeMode={'tail'} style={styles.topic}>
            {item.item.topic}
          </Text>
          <Text style={styles.timeout}>
            {item.item.timeread}·{item.item.uploadedate}
          </Text>
          <View style={styles.valuesbox}>
            <Image
              source={require('../../assets/Ellipse2.png')}
              style={styles.imagebox}
            />
            <Text style={styles.author}>Scott Jhonson</Text>
          </View>
        </View>
      </View>
    );
  };

  const renderItem1 = (item: any) => {
    return (
      <TouchableOpacity>
        <View style={styles.renderItemView1}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../../assets/Ellipse2.png')}
              style={styles.imagebox1}
            />
            <Text
              style={{
                color: 'black',
                fontSize: 20,
                marginLeft: 10,
                fontFamily: 'Manrope-SemiBold',
              }}>
              Scott Jhonson
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 25,
            }}>
            <Text
              numberOfLines={3}
              ellipsizeMode={'tail'}
              style={styles.topic1}>
              {item.item.topic}
            </Text>
            <Image source={{uri: item.item.image}} style={styles.image1} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={styles.timeout1}>
              {item.item.timeread}·{item.item.uploadedate}
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  marginRight: 5,
                  color: 'grey',
                  fontSize: 40,
                  fontWeight: 'bold',
                }}>
                ···
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  const todaysDate = () => {
    const date = new Date();
    const options = {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    };
    const formattedDate = date.toLocaleString('en-US', options);
    return formattedDate;
  };

  return (
    <View style={styles.container}>
      <View style={styles.flatlistview}>
        <View>
          <Image
            source={require('../../assets/dashlogo.png')}
            style={styles.logo}
          />
          <Text style={styles.header}>Must you know today</Text>
          <Text style={styles.formatdate}>{todaysDate()}</Text>
        </View>
        <FlatList horizontal data={FlatlistValue} renderItem={renderItem} />
      </View>
      <FlatList data={FlatlistValue} renderItem={renderItem1} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
  imagebox: {height: 24, width: 24},
  imagebox1: {height: 30, width: 30},
  valuesbox: {marginTop: 15, flexDirection: 'row'},
  valuesbox1: {marginTop: 15, flexDirection: 'row'},
  logo: {height: 35, width: 35, margin: 25},
  header: {
    color: 'white',
    marginHorizontal: 25,
    fontSize: 40,
    justifyContent: 'space-around',
    fontFamily: 'PlayfairDisplay-Bold',
  },
  image: {width: 220, height: 230},
  image1: {
    width: 100,
    height: 100,
    marginLeft: 37,
  },
  flatlistview: {
    height: '60%',
    width: '100%',
    backgroundColor: 'black',
  },
  author: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Manrope-SemiBold',
    color: 'white',
  },
  author1: {marginLeft: 15, fontSize: 18, fontWeight: 'bold', color: 'black'},
  timeout: {
    fontFamily: 'Manrope-Regular',
    color: 'darkgray',
    marginTop: 7,
    fontSize: 14,
    fontWeight: 'normal',
    alignContent: 'center',
  },
  timeout1: {
    fontFamily: 'Manrope-Regular',
    color: 'darkgrey',
    fontSize: 17,
    fontWeight: 'normal',
  },
  formatdate: {
    marginHorizontal: 25,
    fontSize: 20,
    color: 'grey',
    marginTop: 10,
    fontFamily: 'Manrope-Regular',
  },
  topic: {
    fontFamily: 'Manrope-Bold',
    color: 'white',
    fontSize: 20,
    marginTop: 13,
  },
  topic1: {
    fontFamily: 'Manrope-Bold',
    width: '70%',
    color: 'black',
    fontSize: 22,
    fontWeight: '600',
  },
  box1: {width: 220, height: 230},
  box2: {width: 220, height: 230, flexDirection: 'row'},
  renderItemView: {
    backgroundColor: 'black',
    height: 370,
    width: 220,
    alignSelf: 'center',
    marginHorizontal: 25,
  },
  renderItemView1: {
    backgroundColor: 'white',
    padding: 25,
    marginBottom: 1,
    elevation: 0.5,
  },
});
