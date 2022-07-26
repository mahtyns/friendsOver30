import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import planList from './text-data/planList';

export default function App() {

  const [timer, setTimer] = useState(false)
  const [responseTime, setResponseTime] = useState(15)

  const startTimer = () => {
    setTimer(true)
  }

  useEffect(() => {
        
      if(timer) {
        // if (responseTime === 0 ) {
        //     clearInterval;
        //     setTimer(false)}
        setInterval(()=> {
          setResponseTime(responseTime => responseTime - 1);
        }, 1000);
        if (responseTime === 0) {alert("Time over")}
      }
      else setResponseTime(15)
      
  }, [timer])


  return (
    <View style={styles.container}>
        <View style={styles.gameWrapper}>
          <Text style={styles.gameTitle}>Friends Over 30</Text>
        
        <View style={styles.gameDescriptionWrapper}>
        <Text style={styles.gameDescription}>The game rules are very simple. Imagine you're over 30. Your friends come up with a cool weekend plan. Your task is to find an excuse not to go in 15 seconds. The player that doesn't come up with an excuse loses.
        The excuse cannot be repeated.</Text>
        </View>
        <View style={styles.planProposalWrapper}>
          <Text >Here comes the plan for this weekend:</Text>
           <Text style={styles.planProposal}>{planList[0]}</Text>
        </View>
        {timer ? <View>
          <Text>{responseTime}</Text>
        </View> : null}

        <View style={styles.countdownTimerWrapper}>
          <Button
          title='Start now'
          onPress={startTimer} />
        </View>
        <View> 
          <Text style={styles.credits}>This app was made for educational purposes. Idea from Instagram meme account Make Life Harder</Text>
        </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  gameTitle: {
    fontSize: 30,
  },
  gameWrapper: {
    marginTop: 100,
    marginLeft: 20,
    marginRight: 40
  },
  gameDescriptionWrapper: {
   paddingTop: 20,
  },
  
  gameDescription: {
   fontSize: 15,
  },
  planProposalWrapper: {
    paddingTop: 25
  },
  planProposal: {
    fontSize: 30,
    padding: 20
  },
  countdownTimerWrapper: {
    marginTop: 100
  },
  credits: {
    fontSize: 10,
    marginTop: 100
  }

});
