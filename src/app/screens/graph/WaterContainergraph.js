//import liraries
import React, { Component , useEffect} from 'react';
import { View, Text, StyleSheet,Dimensions } from 'react-native';
import { COLOR } from "@constant";
import {useSelector , useDispatch} from 'react-redux';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";

// create a component
const WaterContainergraph = () => {

    const waterStore = useSelector(state => state.waterReducer);
    
    const data = {
        labels: ["Target", "Cup Watter","Bottle Water"],
        datasets: [
          {
            data: [0,waterStore.targetVolume, waterStore.glassVolume, waterStore.bottleVolume],
            color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
            strokeWidth: 2 // optional
          }
        ],
        legend: ["Rainy Days"] // optional
    };


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
    return (
        <View style={styles.container}>
            <Text style={{color : 'white',fontSize:20}}>Water Persantaion Graph</Text>

            <View style={{marginTop : 20}}>
                <BarChart
                    style={styles.chartStyle}
                    data={data}
                    width={Dimensions.get('window').width - 20}
                    height={450}
                    yAxisLabel="ml"
                    chartConfig={chartConfig}
                    verticalLabelRotation={30}
                />
            </View>
           <View style={{marginTop:20}}>
                <Text style={{color : 'white',fontSize:20}}>Target Water : {waterStore.targetVolume} ml</Text>
                <Text style={{color : 'white',fontSize:20}}>Water Bottle Container : {waterStore.bottleVolume} ml</Text>
                <Text style={{color : 'white',fontSize:20}}>Cup Water Container : {waterStore.glassVolume} ml</Text>
           </View>

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLOR.backGraound,
    },
    chartStyle : {
        borderRadius : 0,
        alignSelf : 'center',
        //paddingHorizontal : 10
    }
});

//make this component available to the app
export default WaterContainergraph;
