//import liraries
import React, { Component , useEffect,useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import {useSelector , useDispatch} from 'react-redux';
import {languageString} from '@lacalization'
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";

// create a component
const GraphScreen = () => {

    const userStore = useSelector(state => state.userReducer);
    const [temp,setTemp ] = useState("");
    const [startDate , setStartDate] = useState("2023-02-01");

    const Reqdata = ["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28"];
    const lable = [1000,2000,2000,1500,1000,3000,4000,2000,3000,2500];

    const chartConfig = {
        backgroundGradientFrom: "blue",
        backgroundGradientFromOpacity: 1,
        backgroundGradientTo: "red",
        backgroundGradientToOpacity: 1,
        color: opacity => 'rgba(255, 255, 255,1)',
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
      };

    const data = {
        labels: lable,
        datasets: [
          {
            data: Reqdata,
            color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
            strokeWidth: 2 // optional
          }
        ],
        legend: ["Rainy Days"] // optional
    };


    const FetchLanguage = async () => {
        setTemp(languageString.today);
   }

   

    useEffect(()=>{
        FetchLanguage();
    },[])


    return (
        <View style={styles.container}>
            <View>
             <Calendar
                    markingType={'period'}
                    initialDate={startDate}
                    markedDates={{
                        '2012-05-15': {marked: true, dotColor: '#50cebb'},
                        '2012-05-16': {marked: true, dotColor: '#50cebb'},
                        '2012-05-21': {startingDay: true, color: '#50cebb', textColor: 'white'},
                        '2012-05-22': {color: '#70d7c7', textColor: 'white'},
                        '2012-05-23': {color: '#70d7c7', textColor: 'white', marked: true, dotColor: 'white'},
                        '2012-05-24': {color: '#70d7c7', textColor: 'white'},
                        '2012-05-25': {endingDay: true, color: '#50cebb', textColor: 'white'}
                    }}
                    style={{
                        borderWidth: 1,
                        borderColor: 'gray',
                        height: 370,
                        width: Dimensions.get('screen').width,
                        //height : Dimensions.get('screen').height/2
                    }}
                    theme={{
                        backgroundColor: 'red',
                        calendarBackground: 'bule',
                        textSectionTitleColor: '#ffffff',
                        textSectionTitleDisabledColor: '#ffffff',
                        selectedDayBackgroundColor: '#ffffff',
                        selectedDayTextColor: '#ffffff',
                        todayTextColor: '#ffffff',
                        dayTextColor: '#ffffff',
                        textDisabledColor: '#ffffff',
                        dotColor: '#ffffff',
                        selectedDotColor: '#ffffff',
                        arrowColor: 'orange',
                        disabledArrowColor: '#ffffff',
                        monthTextColor: '#ffffff',
                        indicatorColor: '#ffffff',
                        textDayFontFamily: 'monospace',
                        textMonthFontFamily: 'monospace',
                        textDayHeaderFontFamily: 'monospace',
                        textDayFontWeight: '300',
                        textMonthFontWeight: 'bold',
                        textDayHeaderFontWeight: '300',
                        textDayFontSize: 16,
                        textMonthFontSize: 16,
                        textDayHeaderFontSize: 16
                      }}
             />
          </View>
          <View style={{backgroundColor:'red',width:Dimensions.get('screen').width , height:Dimensions.get('screen').height/2}}>
                <LineChart
                    style={styles.chartStyle}
                    data={data}
                    width={Dimensions.get('window').width - 20}
                    height={450}
                    yAxisLabel="ml"
                    chartConfig={chartConfig}
                    verticalLabelRotation={30}
                />
          </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection : 'column',
        backgroundColor: '#2c3e50',

    },
});

//make this component available to the app
export default GraphScreen;
