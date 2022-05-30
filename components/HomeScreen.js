import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import categoriesData from '../assets/data/categoriesData';
import popularData from '../assets/data/popularData';
import colors from '../assets/colors/colors';

Feather.loadFont();
MaterialCommunityIcons.loadFont();

const HomeScreen = ({navigation}) => {
  const renderCategoriesItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => alert('are you interested in ' + item.title + ' ???')}>
        <View
          style={
            ([styles.categoriesItemWrapper],
            {
              backgroundColor: item.selected
                ? colors.primary
                : 'rgb(250,250,235)',
              marginLeft: item.id === '1' ? 20 : 0,
              marginRight: 20,
              borderRadius: 20,
              shadowColor: 'brown',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.06,
              shadowRadius: 10,
              elevation: 2,
            })
          }>
          <Image source={item.image} style={styles.categoriesItemImage} />
          <Text style={styles.categoriesItemTitle}>{item.title}</Text>
          <View
            style={
              ([styles.categoriesItemSelect],
              {
                backgroundColor: item.selected ? 'white' : '#F26C68',
                alignSelf: 'center',
                justifyContent: 'center',
                marginTop: 20,
                height: 26,
                width: 26,
                borderRadius: 26,
                marginBottom: 20,
              })
            }>
            <Feather
              style={
                ([styles.categoriesItemIcon],
                {
                  color: item.selected ? 'black' : 'white',
                  alignSelf: 'center',
                })
              }
              name="chevron-right"
              size={8}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator="false">
        <SafeAreaView>
          <View style={styles.headerWrapper}>
            <TouchableOpacity>
              <Image
                source={require('../assets/images/profile.png')}
                style={styles.profileImage}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Feather name="menu" size={24} color={colors.textdark} />
            </TouchableOpacity>
          </View>
        </SafeAreaView>

        {/* title */}
        <View style={styles.titleWrapper}>
          <Text style={styles.subTitle}>Food</Text>
          <Text style={styles.subTitle2}>Delivery</Text>
        </View>

        {/* searchBar */}
        <View style={styles.searchWrapper}>
          <Feather name="search" size={16} color={colors.textdark} />
          <View style={styles.search}>
            <Text style={styles.searchText}>search...</Text>
          </View>
        </View>

        {/* categories */}
        <View style={styles.categoriesWrapper}>
          <Text style={styles.categoriesTitle}>categories</Text>
          <View style={styles.categoriesListWrapper}>
            <FlatList
              data={categoriesData}
              renderItem={renderCategoriesItem}
              keyExtractor={item => item.id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>

        {/* popular */}
        <View style={styles.popularWrapper}>
          <Text style={styles.popularTitle}>Popular</Text>
          <View style={styles.popularListWrapper}>
            {popularData.map(item => (
              <TouchableOpacity
                key={item.id}
                onPress={() =>
                  navigation.navigate('Details', {
                    item: item,
                  })
                }>
                <View
                  style={
                    ([styles.popularCardWrapper],
                    {
                      marginTop: item.id === '1' ? 10 : 20,
                      backgroundColor: 'white',
                      borderRadius: 25,
                      paddingTop: 20,
                      paddingLeft: 20,
                      flexDirection: 'row',
                      overflow: 'hidden',
                    })
                  }>
                  <View>
                    <View>
                      <View style={styles.popularTopWrapper}>
                        <MaterialCommunityIcons
                          name="crown"
                          size={12}
                          color={colors.primary}
                        />
                        <Text style={styles.popularTopText}>
                          top of the week
                        </Text>
                      </View>
                      <View style={styles.popularTitleWrapper}>
                        <Text style={styles.popularTitlesTitle}>
                          {item.title}
                        </Text>
                        <Text style={styles.popularTitlesWeight}>
                          weight {item.weight}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.popularBottomCard}>
                      <View style={styles.addPizzaButton}>
                        <Feather
                          name="plus"
                          size={10}
                          color={colors.textdark}
                        />
                      </View>
                      <View style={styles.ratingWrapper}>
                        <MaterialCommunityIcons
                          name="star"
                          size={10}
                          color={colors.textdark}
                        />
                        <Text style={styles.rating}>{item.rating}</Text>
                      </View>
                    </View>
                  </View>

                  <View style={styles.popularCardRight}>
                    <Image
                      source={item.image}
                      style={styles.popularCardImage}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: 'center',
  },
  profileImage: {
    height: 40,
    width: 40,
    borderRadius: 40,
  },
  titleWrapper: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  subTitle: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    color: colors.textdark,
    //marginBottom: 5,
  },
  subTitle2: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 32,
    color: colors.textdark,
    marginTop: 5,
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 30,
  },
  search: {
    flex: 1,
    marginLeft: 10,
    borderBottomColor: colors.textlight,
    borderBottomWidth: 2,
  },
  searchText: {
    fontFamily: 'Montserrat-Semibold',
    fontSize: 14,
    color: colors.textlight,
    marginBottom: 5,
  },
  categoriesWrapper: {
    marginTop: 30,
  },
  categoriesTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    //marginLeft: 20,
    paddingHorizontal: 20,
  },
  categoriesListWrapper: {paddingTop: 15, paddingBottom: 20},
  categoriesItemWrapper: {
    // backgroundColor: '#F5CA48',
    // marginRight: 20,
    // borderRadius: 20,
    // marginLeft: 20,
  },
  categoriesItemImage: {
    height: 60,
    width: 60,
    alignSelf: 'center',
    marginHorizontal: 20,
  },
  categoriesItemTitle: {
    textAlign: 'center',
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    marginTop: 10,
  },
  categoriesItemSelect: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20,
    height: 26,
    width: 26,
    backgroundColor: '#F26C68',
    borderRadius: 26,
    marginBottom: 20,
  },
  categoriesItemIcon: {
    // alignSelf: 'center',
  },
  popularWrapper: {
    paddingHorizontal: 20,
    shadowColor: 'brown',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.09,
    shadowRadius: 10,
    elevation: 2,
    //marginHorizontal: 20,
    //marginLeft: 20,
    //backgroundColor: 'pink',
  },
  popularTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    //marginBottom: 10,
  },
  popularCardWrapper: {
    // backgroundColor: 'white',
    // borderRadius: 25,
    // paddingTop: 20,
    // paddingLeft: 20,
    // flexDirection: 'row',
  },
  popularTopWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  popularTopText: {
    marginLeft: 10,
    fontFamily: 'Montserrat-Semibold',
    fontSize: 14,
  },
  popularTitlesTitle: {
    fontFamily: 'Montserrat-Semibold',
    fontSize: 14,
    color: colors.textdark,
  },
  popularTitleWrapper: {
    marginTop: 20,
  },
  popularTitlesWeight: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
    color: colors.textlight,
    marginTop: 5,
  },
  popularBottomCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: -20,
  },
  addPizzaButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  rating: {
    fontFamily: 'Montserrat-Semibold',
    fontSize: 12,
    color: colors.textdark,
    marginLeft: 5,
  },
  popularCardRight: {
    marginLeft: 40,
  },
  popularCardImage: {
    height: 125,
    width: 210,
    resizeMode: 'contain',
  },
});

export default HomeScreen;
