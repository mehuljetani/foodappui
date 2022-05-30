import {CurrentRenderContext} from '@react-navigation/native';
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../assets/colors/colors';
import popularData from '../assets/data/popularData';

const Details = ({route, navigation}) => {
  const {item} = route.params;
  //console.log(route.params);
  //console.log(item);

  const renderIngredientsItem = ({item}) => {
    return (
      <View
        style={
          ([styles.ingredintsImgWrapper],
          {
            marginLeft: item.id === '1' ? 20 : 0,
            backgroundColor: 'white',
            paddingHorizontal: 10,
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 15,
            borderRadius: 15,
            shadowColor: 'brown',
            shadowOffset: {
              width: 0,
              height: 12,
            },
            shadowOpacity: 0.09,
            shadowRadius: 10,
            elevation: 2,
          })
        }>
        <Image source={item.image} style={styles.ingredientsImageStyle} />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.headerWrapper}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.headerLeft}>
              <Feather name="chevron-left" size={12} color={colors.textdark} />
            </View>
          </TouchableOpacity>
          <View style={styles.headerRight}>
            <MaterialCommunityIcons name="star" size={12} color={'black'} />
          </View>
        </View>
      </SafeAreaView>

      {/* titles */}
      <View style={styles.titleWrapper}>
        <Text style={styles.titleItemStyle}>{item.title}</Text>
      </View>

      {/* price */}
      <View style={styles.priceWrapper}>
        <Text style={styles.priceItem}>${item.price}</Text>
      </View>

      {/* pizza info */}
      <View style={styles.infoWrapper}>
        <View style={styles.infoLeftWrapper}>
          <View style={styles.infoItemWrapper}>
            <Text style={styles.infoItemTitle}>Size</Text>
            <Text style={styles.infoItemStyle}>
              {item.sizeName} {item.sizeNumber}
            </Text>
          </View>
          <View style={styles.infoItemWrapper}>
            <Text style={styles.infoItemTitle}>Crust</Text>
            <Text style={styles.infoItemStyle}>{item.crust}</Text>
          </View>
          <View style={styles.infoItemWrapper}>
            <Text style={styles.infoItemTitle}>Delivery in</Text>
            <Text style={styles.infoItemStyle}>{item.deliveryTime}</Text>
          </View>
        </View>
        <View>
          <Image source={item.image} style={styles.infoImageStyle} />
        </View>
      </View>

      {/* Ingredients */}
      <View style={styles.ingredientWrapper}>
        <Text style={styles.ingredientTextStyle}>Ingredients</Text>
        <View style={styles.ingrediejntsListWrapper}>
          <FlatList
            data={item.ingredients}
            renderItem={renderIngredientsItem}
            keyExtractor={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>

      {/* orderButton */}
      <View style={styles.orderWrapper}>
        <TouchableOpacity
          style={styles.orderBtnStyle}
          onPress={() => alert('Your Order Has Been Placed...!')}>
          <View style={styles.orderBtnWrapper}>
            <Text style={styles.orderTextStyle}>Place an order</Text>
            <View style={styles.orderIcon}>
              <Feather
                name="chevron-right"
                size={18}
                color={'black'}
                style={styles.orderIconStyle}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  headerLeft: {
    borderColor: colors.textlight,
    borderWidth: 2,
    padding: 12,
    borderRadius: 10,
  },
  headerRight: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
    borderWidth: 2,
    padding: 12,
    borderRadius: 10,
  },
  titleWrapper: {
    paddingHorizontal: 20,
    marginTop: 30,
  },
  titleItemStyle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 32,
    color: colors.textdark,
    width: '50%',
  },
  priceWrapper: {
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 30,
  },
  priceItem: {
    fontFamily: 'Montserrat-Semibold',
    fontSize: 32,
    color: colors.price,
  },
  infoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoLeftWrapper: {
    paddingLeft: 20,
  },
  infoItemWrapper: {
    //marginTop: 30,
    marginBottom: 20,
  },
  infoItemTitle: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    color: colors.textlight,
    marginBottom: 5,
  },
  infoItemStyle: {
    fontFamily: 'Montserrat-Semibold',
    fontSize: 16,
    color: colors.textdark,
  },
  infoImageStyle: {
    height: 176,
    width: 296,
    marginLeft: 50,
    resizeMode: 'contain',
  },
  ingredientWrapper: {
    marginTop: 40,
    //paddingHorizontal: 20,
  },
  ingredientTextStyle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    marginBottom: 20,
    color: colors.textdark,
    paddingHorizontal: 20,
  },
  ingrediejntsListWrapper: {
    paddingVertical: 20,
  },
  ingredintsImgWrapper: {
    // backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'center',
    // paddingHorizontal: 10,
    // marginRight: 15,
    // borderRadius: 15,
    // shadowColor: 'brown',
    // shadowOffset: {
    //   width: 0,
    //   height: 12,
    // },
    // shadowOpacity: 0.09,
    // shadowRadius: 10,
    // elevation: 2,
  },
  ingredientsImageStyle: {
    resizeMode: 'contain',
  },
  orderWrapper: {
    marginTop: 30,
    marginHorizontal: 20,
    borderRadius: 50,
    paddingVertical: 20,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  orderBtnWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  orderBtnStyle: {},
  orderTextStyle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
    color: colors.textdark,
  },
  orderIcon: {
    marginLeft: 3,
  },
});

export default Details;
