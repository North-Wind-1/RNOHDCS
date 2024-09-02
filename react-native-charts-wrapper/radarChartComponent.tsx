import React from 'react';
import {
  AppRegistry,
  ScrollView,
  StyleSheet,
  Text,
  View,
  processColor,
} from 'react-native';

import {RadarChart} from 'react-native-charts-wrapper';
import {Tester, TestCase, TestSuite} from '@rnoh/testerino';

const RadarChartDemo = () => {
  const data = [
    {value: 30},
    {value: 40},
    {value: 70},
    {value: 34},
    {value: 44},
  ];
  return (
    <Tester>
      <ScrollView style={{marginBottom:100}}>

      <TestSuite name="雷达图">
        <TestCase itShould="props:drawWeb(false) 是否绘制Web，其他用例均已覆盖true的情况">
          <View style={{height: 300}}>
            <RadarChart
              style={styles.chart}
              data={{
                dataSets: [
                  {
                    label: 'demo',
                    values: data,
                    config: {
                      color: processColor('#4f4'),
                      drawFilled: true,
                      lineWidth: 2,
                      fillColor: processColor('#4f4'),
                      fillAlpha: 150,
                      drawHighlightIndicators: false,
                      
                    },
                  },
                ],
              }}
              legend={{
                enabled: true,
                verticalAlignment: 'TOP',
                horizontalAlignment: 'CENTER',
                orientation: 'HORIZONTAL',
                drawInside: false,
                xEntrySpace: 7,
                yEntrySpace: 5,
              }}
              drawWeb={false}
              webLineWidth={3}
              webColor={processColor('#4f4')}
              webLineWidthInner={3}
              webColorInner={processColor('#000')}
              webAlpha={150}
              xAxis={{
                position: 'BOTTOM',
                drawGridLines: false,
                textSize: 20,
                yOffset: 0,
                granularity: 1,
                labelCount: 7,
                textColor: processColor('#fff'),
              }}
              yAxis={{
                labelCount: 5,
                textSize: 20,
                drawLabels: false,
                axisMaximum: 80,
                axisMinimum: 0,
              }}
              animation={{durationX: 1000, durationY: 1000}}
            />
          </View>
        </TestCase>
      </TestSuite>
      <TestSuite name="雷达图">
        <TestCase itShould="props:webLineWidth 设置来自中心的腹板线的宽度">
          <View style={{height: 300}}>
            <RadarChart
              style={styles.chart}
              data={{
                dataSets: [
                  {
                    label: 'demo',
                    values: data,
                    config: {
                      color: processColor('#4f4'),
                      drawFilled: true,
                      lineWidth: 2,
                      fillColor: processColor('#4f4'),
                      fillAlpha: 150,
                      drawHighlightIndicators: false,
                      
                    },
                  },
                ],
              }}
              legend={{
                enabled: true,
                verticalAlignment: 'TOP',
                horizontalAlignment: 'CENTER',
                orientation: 'HORIZONTAL',
                drawInside: false,
                xEntrySpace: 7,
                yEntrySpace: 5,
              }}
              drawWeb={true}
              webLineWidth={10}
              webColor={processColor('#4f4')}
              webLineWidthInner={3}
              webColorInner={processColor('#000')}
              webAlpha={150}
              xAxis={{
                position: 'BOTTOM',
                drawGridLines: false,
                textSize: 20,
                yOffset: 0,
                granularity: 1,
                labelCount: 7,
                textColor: processColor('#fff'),
              }}
              yAxis={{
                labelCount: 5,
                textSize: 20,
                drawLabels: false,
                axisMaximum: 80,
                axisMinimum: 0,
              }}
              animation={{durationX: 1000, durationY: 1000}}
            />
          </View>
        </TestCase>
      </TestSuite>
      <TestSuite name="雷达图">
        <TestCase itShould="props:webLineWidthInner 设置Web线的宽度，这些Web线位于来自 *中心">
          <View style={{height: 300}}>
            <RadarChart
              style={styles.chart}
              data={{
                dataSets: [
                  {
                    label: 'demo',
                    values: data,
                    config: {
                      color: processColor('#4f4'),
                      drawFilled: true,
                      lineWidth: 2,
                      fillColor: processColor('#4f4'),
                      fillAlpha: 150,
                      drawHighlightIndicators: false,
                      
                    },
                  },
                ],
              }}
              legend={{
                enabled: true,
                verticalAlignment: 'TOP',
                horizontalAlignment: 'CENTER',
                orientation: 'HORIZONTAL',
                drawInside: false,
                xEntrySpace: 7,
                yEntrySpace: 5,
              }}
              drawWeb={true}
              webLineWidth={1}
              webColor={processColor('#4f4')}
              webLineWidthInner={1}
              webColorInner={processColor('#000')}
              webAlpha={150}
              xAxis={{
                position: 'BOTTOM',
                drawGridLines: false,
                textSize: 20,
                yOffset: 0,
                granularity: 1,
                labelCount: 7,
                textColor: processColor('#fff'),
              }}
              yAxis={{
                labelCount: 5,
                textSize: 20,
                drawLabels: false,
                axisMaximum: 80,
                axisMinimum: 0,
              }}
              animation={{durationX: 1000, durationY: 1000}}
            />
          </View>
        </TestCase>
      </TestSuite>

      <TestSuite name="雷达图">
        <TestCase itShould="props:webAlpha 设置所有Web线的透明度（alpha）值">
          <View style={{height: 300}}>
            <RadarChart
              style={styles.chart}
              data={{
                dataSets: [
                  {
                    label: 'demo',
                    values: data,
                    config: {
                      color: processColor('#4f4'),
                      drawFilled: true,
                      lineWidth: 2,
                      fillColor: processColor('#4f4'),
                      fillAlpha: 150,
                      drawHighlightIndicators: false,
                      
                    },
                  },
                ],
              }}
              legend={{
                enabled: true,
                verticalAlignment: 'TOP',
                horizontalAlignment: 'CENTER',
                orientation: 'HORIZONTAL',
                drawInside: false,
                xEntrySpace: 7,
                yEntrySpace: 5,
              }}
              drawWeb={true}
              webLineWidth={3}
              webColor={processColor('#4f4')}
              webLineWidthInner={3}
              webColorInner={processColor('#000')}
              webAlpha={100}
              xAxis={{
                position: 'BOTTOM',
                drawGridLines: false,
                textSize: 20,
                yOffset: 0,
                granularity: 1,
                labelCount: 7,
                textColor: processColor('#fff'),
              }}
              yAxis={{
                labelCount: 5,
                textSize: 20,
                drawLabels: false,
                axisMaximum: 80,
                axisMinimum: 0,
              }}
              animation={{durationX: 1000, durationY: 1000}}
            />
          </View>
        </TestCase>
      </TestSuite>

      <TestSuite name="雷达图">
        <TestCase itShould="props:webColor 设置来自中心的腹板线的颜色">
          <View style={{height: 300}}>
            <RadarChart
              style={styles.chart}
              data={{
                dataSets: [
                  {
                    label: 'demo',
                    values: data,
                    config: {
                      color: processColor('#4f4'),
                      drawFilled: true,
                      lineWidth: 2,
                      fillColor: processColor('#4f4'),
                      fillAlpha: 150,
                      drawHighlightIndicators: false,               
                    },
                  },
                ],
              }}
              legend={{
                enabled: true,
                verticalAlignment: 'TOP',
                horizontalAlignment: 'CENTER',
                orientation: 'HORIZONTAL',
                drawInside: false,
                xEntrySpace: 7,
                yEntrySpace: 5,
              }}
              drawWeb={true}
              webLineWidth={3}
              webColor={processColor('#4f4')}
              webLineWidthInner={3}
              webColorInner={processColor('#000')}
              webAlpha={100}
              xAxis={{
                position: 'BOTTOM',
                drawGridLines: false,
                textSize: 20,
                yOffset: 0,
                granularity: 1,
                labelCount: 7,
                textColor: processColor('#fff'),
              }}
              yAxis={{
                labelCount: 5,
                textSize: 20,
                drawLabels: false,
                axisMaximum: 80,
                axisMinimum: 0,
              }}
              animation={{durationX: 1000, durationY: 1000}}
            />
          </View>
        </TestCase>
      </TestSuite>
      <TestSuite name="雷达图">
        <TestCase itShould="props:webColorInner 设置网格线的颜色 设置的黑色">
          <View style={{height: 300}}>
            <RadarChart
              style={styles.chart}
              data={{
                dataSets: [
                  {
                    label: 'demo',
                    values: data,
                    config: {
                      color: processColor('#4f4'),
                      drawFilled: true,
                      lineWidth: 2,
                      fillColor: processColor('#4f4'),
                      fillAlpha: 150,
                      drawHighlightIndicators: false,
                      
                    },
                  },
                ],
              }}
              legend={{
                enabled: true,
                verticalAlignment: 'TOP',
                horizontalAlignment: 'CENTER',
                orientation: 'HORIZONTAL',
                drawInside: false,
                xEntrySpace: 7,
                yEntrySpace: 5,
              }}
              drawWeb={true}
              webLineWidth={3}
              webColor={processColor('#4f4')}
              webLineWidthInner={3}
              webColorInner={processColor('#000')}
              webAlpha={100}
              xAxis={{
                position: 'BOTTOM',
                drawGridLines: false,
                textSize: 20,
                yOffset: 0,
                granularity: 1,
                labelCount: 7,
                textColor: processColor('#fff'),
              }}
              yAxis={{
                labelCount: 5,
                textSize: 20,
                drawLabels: false,
                axisMaximum: 80,
                axisMinimum: 0,
              }}
              animation={{durationX: 1000, durationY: 1000}}
            />
          </View>
        </TestCase>
      </TestSuite>
      </ScrollView>

      
    </Tester>
  );
};

export default RadarChartDemo;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    height: 100,
  },
  chart: {
    flex: 1,
  },
});