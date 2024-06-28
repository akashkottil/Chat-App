import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image } from 'react-native';
import React, { useContext, useState } from 'react';
import tick from '../../assets/Icons/tick.png'
import { ThemeContext } from '../../DarkMode/ThemeContext';
import close from '../../assets/Icons/close.png'
import LinearGradient from 'react-native-linear-gradient';
import FirstPlan from './Plans/FirstPlan';
import SecondPlan from './Plans/SecondPlan';
import ThirdPlan from './Plans/ThirdPlan';
import CloseIcon from 'react-native-vector-icons/Ionicons'

const Subscribtion = ({ switchToList }) => {

  // state for managing the plans

  const [selectedPlan, setSelectedPlan] = useState(1);

  // theme

  const { theme } = useContext(ThemeContext)

  // function for change the plan

  const handleSelectPlan = (index) => {
    setSelectedPlan(index);
  };

  const planDetails = [
    {
      duration: "12 Months",
      cost: "Annual renewal 7999.00/Year",

    },
    {
      duration: "6 Months",
      cost: "Monthly renewal 999.00/Month",
      tag: "Recomended"
    },
    {
      duration: "3 Months",
      cost: "Monthly renewal 1599.00/Month",
    },
  ]

  return (
    <View style={[styles.container, { backgroundColor: theme.bgColor }]}>

      {/* conntent section where plan features displays */}

      <View style={[styles.content,]}>
        <TouchableOpacity style={styles.topBar} onPress={switchToList}>
          
          {/* <Image source={close} style={styles.closeImg} /> */}
          <CloseIcon name="close" size={30} color={theme.constWhite}/>

        </TouchableOpacity>
        <LinearGradient
          colors={['#522FDC', 'transparent']}
          style={styles.blackShade}
          start={{ x: 0, y: 0.1 }}
          end={{ x: 0, y: 1 }}

        >
          <View style={styles.planFeatures}>
            <Text style={[styles.headingText, { color: theme.constWhite }]}>Level up Your moments</Text>

            {/* rendering plans conponents */}

            {
              selectedPlan === 0 && (
                <FirstPlan />
              )
            }
            {
              selectedPlan === 1 && (
                <SecondPlan />
              )
            }
            {
              selectedPlan === 2 && (
                <ThirdPlan />
              )
            }

          </View>
        </LinearGradient>
      </View>

      {/* bottom section */}

      <View style={[styles.plans, { backgroundColor: theme.bgColor, }]}>
        {
          planDetails.map((plan, index) => (
            <TouchableOpacity key={index} onPress={() => handleSelectPlan(index)} style={[styles.plan, {
              borderColor: selectedPlan === index ? theme.tabActive : "transparent", backgroundColor: theme.themeColor
            }]}>
              {plan.tag ? (
                <View style={[styles.recommended, { backgroundColor: theme.tabActive }]}>
                  <Text style={[styles.text, { color: theme.constWhite }]}>{plan.tag}</Text>
                </View>
              ) : null}
              <View style={styles.planContent}>
                <View style={styles.top}>
                  <View style={styles.left}>
                    <View style={[
                      styles.selected,
                      { backgroundColor: selectedPlan === index ? '#522FDC' : 'transparent', borderWidth: selectedPlan === index ? 0 : 2 }
                    ]}>
                      {
                        selectedPlan === index ? (<Image source={tick} style={styles.tick} />) : null
                      }

                    </View>
                    <Text style={[styles.text, { color: theme.white }]}>{plan.duration}</Text>
                  </View>

                </View>
                <View style={styles.bottom}>
                  <Text style={[styles.text, { color: theme.white }]}>{plan.cost}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))
        }
      </View>
    </View>
  );
};

export default Subscribtion;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "stretch",
  },
  content: {
    flex: 1,
    position: "relative"
  },
  plan: {
    height: 80,
    borderRadius: 20,
    justifyContent: 'center',
    borderWidth: 2,
    elevation: 16,
    position: "relative"
  },
  plans: {
    flex: 1,
    borderTopStartRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 20,
    paddingVertical: 20,
    gap: 20,
    justifyContent: "center",
    elevation: 80
  },
  selected: {
    height: 20,
    width: 20,
    borderRadius: 100,
    borderColor: 'blue',
  },
  left: {
    flexDirection: "row",
    gap: 20,
    alignItems: 'center',
  },
  planContent: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flex: 1,
    justifyContent: "space-between",
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bottom: {
    alignItems: "flex-start",
  },
  recommended: {
    zIndex: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    position: "absolute",
    top: -2,
    right: -2,
    borderTopEndRadius: 18,
    borderBottomLeftRadius: 18,
    elevation: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  lottie: {
    width: 100,
    height: 100,
  },
  tick: {
    height: 20,
    width: 20
  },
  text: {
    fontWeight: "600"
  },
  closeImg: {
    height: 40,
    width: 40
  },
  topBar: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: 50,
    zIndex: 10,
    position: "absolute"
  },
  blackShade: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  planFeatures: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    paddingHorizontal: 20,
    gap: 10
  },
  headingText: {
    fontSize: 45,
    fontWeight: "600",
  }


});