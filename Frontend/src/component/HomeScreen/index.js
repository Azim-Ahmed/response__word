/* eslint-disable prettier/prettier */
// /* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import Autocomplete from 'react-native-autocomplete-input';
import { useDispatch, useSelector } from 'react-redux';
import avatar from '../image/avatar.png';
import bus from '../image/bus.png';
import HomeImg from '../image/Home.png';
import FareLogo from '../image/FareLogo.png';
import Location from '../image/location.png';
import Arrow from '../image/Arrow.png';
import Seat from '../image/Seat.png';

// -------------------Dimension Import------------------
import { Dimensions } from 'react-native';
import { getAllBus } from '../../redux/actions';
import uuid from 'react-native-uuid';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const index = ({ navigation }) => {
  const buses = useSelector(state => state.buses);
  // console.log('sssssssssssssssssssssssssss', buses.buses);
  const dispatch = useDispatch();
  const diveSitesDat = [
    {
      'OBJECTID': 1,
      'Name': 'Alidhoo Caves',
      'Atoll': 'HAA ALIFU ATOLL',
      'Latitude': 6.8487,
      'longitude': 73.14923333,
    },
    {
      'OBJECTID': 2,
      'Name': 'Amba Canyon',
      'Atoll': 'HAA DHAALU ATOLL',
      'Latitude': 6.737583333,
      'longitude': 73.11321667,
    },
    {
      'OBJECTID': 3,
      'Name': 'Amba Canyon 2',
      'Atoll': 'HAA DHAALU ATOLL',
      'Latitude': 6.73905,
      'longitude': 73.1117,
    },
    {
      'OBJECTID': 4,
      'Name': 'Amba Thila',
      'Atoll': 'HAA DHAALU ATOLL',
      'Latitude': 6.73485,
      'longitude': 73.11678333,
    },
    {
      'OBJECTID': 5,
      'Name': 'Anemon Thila',
      'Atoll': 'HAA DHAALU ATOLL',
      'Latitude': 6.62695,
      'longitude': 72.96691667,
    },
    {
      'OBJECTID': 6,
      'Name': 'Baarah Fairu',
      'Atoll': 'HAA ALIFU ATOLL',
      'Latitude': 6.81425,
      'longitude': 73.21781667,
    },
    {
      'OBJECTID': 7,
      'Name': 'Baarah Thila',
      'Atoll': 'HAA ALIFU ATOLL',
      'Latitude': 6.8066,
      'longitude': 73.1854,
    },
    {
      'OBJECTID': 8,
      'Name': 'Bodu Magu Thila',
      'Atoll': 'HAA DHAALU ATOLL',
      'Latitude': 6.751416667,
      'longitude': 73.04553333,
    },
    {
      'OBJECTID': 9,
      'Name': 'Bodu Thila',
      'Atoll': 'HAA DHAALU ATOLL',
      'Latitude': 6.738516667,
      'longitude': 73.11668333,
    },
    {
      'OBJECTID': 10,
      'Name': 'Buri Cave',
      'Atoll': 'HAA DHAALU ATOLL',
      'Latitude': 6.752,
      'longitude': 72.92795,
    },
    {
      'OBJECTID': 11,
      'Name': 'Coral Garden',
      'Atoll': 'HAA ALIFU ATOLL',
      'Latitude': 6.818216667,
      'longitude': 72.94946667,
    },
  ];

  const busRoutes = Array.from(new Set(buses?.buses.map(item => item.route).flat()));

  // console.log({ busRoutes });
  const updatedBusRoutes = busRoutes.map(item => {
    const resetItem = {};
    resetItem.Name = item;
    resetItem.OBJECTID = uuid.v4();
    return resetItem;
  });
  // console.log({ updatedBusRoutes });

  const [films, setFilms] = useState(busRoutes);
  // For Filtered Data
  const [filteredFirstFilms, setFilteredFirstFilms] = useState([]);
  const [filteredFilms, setFilteredFilms] = useState([]);
  // For Selected Data
  const [selectedFirstValue, setSelectedFirstValue] = useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const [detailsBusItems, setDetailsBusItems] = useState([]);

  useEffect(() => {
    dispatch(getAllBus());
  }, [dispatch]);
  const handleShowDetailsItem = () => {
    const filterdedData = buses?.buses.filter((v) => v.route.includes(selectedFirstValue) || v.route.includes(selectedValue));
    console.log('------------------------', filterdedData);
    const setData = [...new Set(filterdedData)];
    setDetailsBusItems(setData);
  };
  const findFirstFilm = (text) => {
    if (text) {
      const newData = busRoutes.filter(route => route !== selectedFirstValue).filter((item) => {
        const itemDAta = item.toUpperCase();
        const textData = text.toUpperCase();
        return itemDAta.indexOf(textData) > -1;
      });
      setFilteredFirstFilms(newData);
      //    setSelectedValue(newData);
    } else {
      setFilteredFirstFilms([]);
      //  setSelectedValue(null)
    }
  };
  const findFilm = (text) => {
    if (text) {
      const newData = busRoutes.filter(route => route !== selectedValue).filter((item) => {
        const itemDAta = item ?
          item.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemDAta.indexOf(textData) > -1;
      });
      setFilteredFilms(newData);
      //    setSelectedValue(newData);
    } else {
      setFilteredFilms([]);
      //  setSelectedValue(null)
    }
  };
  // userFormLogin();
  // console.log('gg', loggedIn);
  return (
    <>
      {/* <StatusBar barStyle={isDarkMode ? '#fff' : 'dark-content'} /> */}
      <View
        style={{
          // backgroundStyle,
          height: '100%',
          marginVertical: 35,
          backgroundColor: 'white',
        }}>
        {/* -------------------------------header section starts here--- */}

        <View
          style={{
            height: 230,
            paddingTop: 10,
            marginBottom: 15,
            paddingHorizontal: 15,
            marginHorizontal: 5,
            backgroundColor: 'green',
            borderRadius: 7,
          }}>
          {/* -----------------Profile avatar starts here----------------- */}
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
            }}>
            <View
              style={{
                height: '100%',
                width: '12%',
                overflow: 'hidden',
                borderRadius: 50,
                position: 'relative',
              }}>
              <TouchableOpacity>
                <Image
                  source={avatar}
                  resizeMode="contain"
                  style={{ width: '100%', height: undefined, aspectRatio: 1 }}
                />
              </TouchableOpacity>
            </View>

            <Text
              style={{
                color: 'white',
                fontSize: 28,
                // marginBottom: 4,
                fontWeight: '700',
                marginLeft: 20,
              }}>
              City Guide
            </Text>
          </View>

          <TouchableOpacity>
            <Text
              style={{
                color: 'red',
                fontSize: 16,
                fontWeight: '700',
                marginRight: 12,
                textAlign: 'right',
              }}>
              Suggest Correction
            </Text>
          </TouchableOpacity>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                height: 50,
                width: 50,
                overflow: 'hidden',
                marginBottom: -60,
                borderRadius: 50,
                marginLeft: 60,
              }}>
              <TouchableOpacity>
                <Image
                  source={Arrow}
                  resizeMode="contain"
                  style={{ width: '100%', height: undefined, aspectRatio: 1 }}
                />
              </TouchableOpacity>
            </View>
            <View style={{ width: '100%', flexDirection: 'column', marginBottom: 40 }}>
              <View style={styles.autocompleteFirstContainer}>
                <Autocomplete
                  // editable={!isLoading}
                  autoCorrect={false}
                  // data={
                  //   queriedMovies?.length === 1 && queriedMovies[0].compareTitle(query)
                  //     ? [] // Close suggestion list in case movie title matches query
                  //     : queriedMovies
                  // }
                  data={filteredFirstFilms.length > 0 && filteredFirstFilms}
                  defaultValue={selectedFirstValue}
                  onChangeText={text => findFirstFilm(text)}
                  placeholder="Search Location"
                  flatListProps={{
                    keyboardShouldPersistTaps: 'always',
                    keyExtractor: ((item, index) => item.toString()),
                    renderItem: ({ item }) => (
                      <TouchableOpacity onPress={() => {
                        setSelectedFirstValue(item);
                        setFilteredFirstFilms([]);
                      }}>
                        <Text style={styles.itemText}>{item}</Text>
                      </TouchableOpacity>
                    ),
                  }}
                />
              </View>
              <View style={styles.autocompleteContainer}>
                <Autocomplete
                  // editable={!isLoading}
                  autoCorrect={false}
                  // data={
                  //   queriedMovies?.length === 1 && queriedMovies[0].compareTitle(query)
                  //     ? [] // Close suggestion list in case movie title matches query
                  //     : queriedMovies
                  // }
                  data={filteredFilms}
                  defaultValue={selectedValue}
                  // onChangeText={setQuery}
                  onChangeText={text => findFilm(text)}
                  placeholder="Enter Destination"
                  flatListProps={{
                    keyboardShouldPersistTaps: 'always',
                    keyExtractor: ((item, index) => item.toString()),
                    renderItem: ({ item }) => (
                      <TouchableOpacity onPress={() => {
                        setSelectedValue(item);
                        setFilteredFilms([]);
                      }}>
                        <Text style={styles.itemText}>{item}</Text>
                      </TouchableOpacity>
                    ),
                  }}
                />
              </View>
            </View>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => handleShowDetailsItem()}
            >
              <Text
                style={{
                  color: 'white',
                  fontSize: 16,
                  fontWeight: '700',
                  marginTop: 65,
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  width: 100,
                  backgroundColor: 'gray',
                  borderRadius: 8,
                  marginLeft: 60,
                  padding: 10,
                  textAlign: 'center',
                }}>
                Search
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* --------------------------------contente section starts here */}
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={{ height: '54%', zIndex: -1 }}>
          {/* -------------main contente starts here */}

          {detailsBusItems.length > 0 && detailsBusItems.map((item, indexed) => (
            <View key={indexed} style={styles.content}>
              <View style={styles.header}>
                <Text style={styles.busname}> {item?.name}
                </Text>
                <Text style={styles.stoppage}>
                  {item?.route.length} Stopage
                </Text>

              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',

                }}>

                <Image
                  source={{ uri: item?.image }}
                  resizeMode="contain"
                  style={styles.image}
                />
                <View style={{ maxWidth: 200 }}>
                  <Text
                    style={styles.route}>
                    Start: {item?.startFrom}

                  </Text>
                  <Text style={styles.route}>
                    End: {item?.endAt}
                  </Text>
                </View>

              </View>
              <View style={{
                display: 'flex',
                alignItems: 'flex-end',
              }} >
                <TouchableOpacity>
                  <Text style={styles.details}>
                    DETATILS
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ))
          }

        </ScrollView>

        {/* --------------------------Footer section starts here----------- */}
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            // alignItems: 'center',
            justifyContent: 'space-between',
            height: '14%',
            backgroundColor: 'whitesmoke',
            // marginVertical: 5,
            paddingHorizontal: 30,
            paddingVertical: 5,
            bottom: 0,
          }}>
          {/* --------------------------------Home button------------- */}

          <TouchableOpacity>
            <View>
              <Image
                source={HomeImg}
                resizeMode="contain"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 50,
                }}
              />
              <Text
                style={{
                  color: '#0F254F',
                  fontSize: 12,
                  fontWeight: '700',
                  marginTop: 5,
                }}>
                Home
              </Text>
            </View>
          </TouchableOpacity>

          {/* ---------------------------fare logo starts here----------------- */}

          <TouchableOpacity onPress={() => navigation.navigate('FareCost')}>
            <View>
              <Image
                source={FareLogo}
                resizeMode="contain"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 50,
                  marginLeft: 9,
                }}
              />
              <Text
                style={{
                  color: '#0F254F',
                  fontSize: 12,
                  fontWeight: '700',
                  marginTop: 5,
                }}>
                Explore Fare
              </Text>
            </View>
          </TouchableOpacity>

          {/* ----------------------Bus Details starts here------------- */}

          <TouchableOpacity onPress={() => navigation.navigate('FindBus')}>
            <View>
              <Image
                source={bus}
                resizeMode="contain"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 50,
                  marginLeft: 9,
                }}
              />
              <Text
                style={{
                  color: '#0F254F',
                  fontSize: 12,
                  fontWeight: '700',
                  marginTop: 5,
                }}>
                Bus Details
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  // autocompleteContainer: {
  //   width: '85%',
  //   padding: 5,
  // },
  autocompleteFirstContainer: {
    marginBottom: 40,
    width: '85%',
    padding: 5,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 12,

  },
  autocompleteContainer: {
    left: 0,
    position: 'absolute',
    right: 0,
    top: 50,
    width: '85%',
    zIndex: 4,
    padding: 5,
  },
  route: {
    color: '#0F254F',
    fontSize: 14,
    marginBottom: 4,
    fontWeight: '700',
  },
  itemText: {
    fontSize: 15,
    margin: 2,
  },
  acTextContainerStyle: {
    borderColor: '#fff',
    padding: 3,
    paddingHorizontal: 5,
    borderRadius: 10,
    backgroundColor: '#fff',
  },

  details: {
    color: 'white',
    backgroundColor: 'green',
    fontSize: 14,
    marginBottom: 4,
    fontWeight: '700',
    padding: 5,
    borderRadius: 7,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  busname: {
    color: 'green',
    fontSize: 20,
    marginBottom: 4,
    fontWeight: '700',
  },
  stoppage: {
    color: 'white',
    fontSize: 15,
    marginBottom: 4,
    fontWeight: '700',
    backgroundColor: 'red',
    padding: 2,
    borderRadius: 7,
  },
  content: {
    height: 160,
    // alignItems: 'center',
    marginVertical: 10,
    paddingVertical: 12,
    paddingHorizontal: 12,
    shadowColor: '#000',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 3,
    shadowRadius: 7,
    elevation: 3,
    borderRadius: 15,
    backgroundColor: 'white',
  },
  heading: {
    color: 'green',
    fontSize: 18,
    marginBottom: 4,
    fontWeight: '700',
    // textAlign: 'justify'
  },

  img: {
    width: 50,
    height: 50,
    aspectRatio: 1,
    marginTop: 0,
    marginRight: 10,
  },

  image: {
    width: 80,
    height: 70,
    aspectRatio: 1,
    marginTop: 0,
    marginRight: 18,
  },
  text: {
    // color: '#0F254F',
    fontSize: 12,
    textAlign: 'justify',
    marginBottom: 4,
    // fontWeight: '700',
  },
});

export default index;
