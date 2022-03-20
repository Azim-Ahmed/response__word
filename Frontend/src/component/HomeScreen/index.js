/* eslint-disable react-hooks/exhaustive-deps */
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
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const index = ({ navigation }) => {
  const buses = useSelector(state => state.buses);
  const isDarkMode = useColorScheme() === 'dark';
  console.log('sssssssssssssssssssssssssss', buses.buses);
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

  console.log(busRoutes);

  const [films, setFilms] = useState(busRoutes);
  // For Filtered Data
  const [filteredFilms, setFilteredFilms] = useState([]);
  const [filteredFirstFilms, setFilteredFirstFilms] = useState([]);
  // For Selected Data
  const [selectedFirstValue, setSelectedFirstValue] = useState();
  const [selectedValue, setSelectedValue] = useState();
  const [detailsBusItems, setDetailsBusItems] = useState([]);

  useEffect(() => {
    dispatch(getAllBus());
  }, []);
  const handleShowDetailsItem = () => {

    console.log({ selectedValue, selectedFirstValue });
  };
  const findFirstFilm = (text) => {
    if (text) {
      const newData = films.filter(route => route !== selectedValue).filter((item) => {
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
      const newData = films.filter(route => route !== selectedFirstValue).filter((item) => {
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
                  data={filteredFirstFilms}
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

          <View style={{ marginHorizontal: 25 }}>
            <TouchableOpacity style={styles.Content}>
              <Text style={styles.heading}> Track Nearby Running Buses</Text>

              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  source={Location}
                  resizeMode="contain"
                  style={styles.img}
                />
                <View style={{ width: 230 }}>
                  <Text style={styles.text}>
                    See how many buses are currently running on the road near
                    You and pick up your suitable bus among them
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.Content}>
              <Text style={styles.heading}> Check Seat Availability</Text>

              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image source={Seat} resizeMode="contain" style={styles.img} />
                <View style={{ width: 230 }}>
                  <Text style={styles.text}>
                    Check seats are available or not for you providing by the
                    driver
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.Content}>
              <Text style={styles.heading}> See Sorrounding places</Text>

              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  source={Location}
                  resizeMode="contain"
                  style={styles.img}
                />
                <View style={{ width: 230 }}>
                  <Text style={styles.text}>
                    see nearby hospitals, public toilets and nearby gas station,
                    shopping mall etc.
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
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
  Content: {
    height: 105,
    marginVertical: 5,
    paddingVertical: 12,
    paddingHorizontal: 12,
    shadowColor: '#000',
    // shadowOffset: { width: 3, height: 3 },
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
  text: {
    // color: '#0F254F',
    fontSize: 12,
    textAlign: 'justify',
    marginBottom: 4,
    // fontWeight: '700',
  },
});

export default index;
