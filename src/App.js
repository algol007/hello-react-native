import React, {useState, useEffect} from 'react';
import {ScrollView, View} from 'react-native';
import FlexBox from './pages/FlexBox';
import StylingComponent from './pages/StylingComponent';
import Position from './pages/Position';
import PropsDinamis from './pages/PropsDinamis';
import StateDinamis from './pages/StateDinamis';
import Communication from './pages/Communication';
import ReactNativeSvg from './pages/ReactNativeSvg';
import APIUsingVanilla from './pages/APIUsingVanilla';
import APIUsingAxios from './pages/APIUsingAxios';
import CRUDWithLocalAPI from './pages/CRUDWithLocalAPI';

const App = () => {
  const [isShow, setIsShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsShow(false);
    }, 6000);
  }, []);

  return (
    <View>
      <ScrollView>
        {/* <StylingComponent />
        {isShow && <FlexBox />}
        <Position /> */}
        {/* <PropsDinamis /> */}
        {/* <StateDinamis /> */}
        {/* <Communication /> */}
        {/* <ReactNativeSvg /> */}
        {/* <APIUsingVanilla /> */}
        {/* <APIUsingAxios /> */}
        <CRUDWithLocalAPI />
      </ScrollView>
    </View>
  );
};

export default App;
