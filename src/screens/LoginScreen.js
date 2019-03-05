import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button,Header, Left, Right, Icon,Body,Title,Container,Form,Input,Item,Label,Content } from 'native-base';
import { Font, AppLoading } from "expo";

class LoginScreen extends Component {
 
    render() {      
      return (
          
      <View style={styles.container}>
     
        <Header>
          <Left>
           <Icon name="menu" onPress={()=>this.props.navigation.openDrawer()}  /> 
           </Left>
          <Body>
            <Title>Medico</Title>
          </Body>
          <Right />
        </Header>
        {/* <View style={{flex: 1, alignItems: 'center',justifyContent: 'center'}}> */}
        <Content>
       
        <Form>
            <Item fixedLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item fixedLabel>
              <Label>Password</Label>
              <Input />
            </Item>
            
          </Form>
          <Button block style={{ margin: 15, marginTop: 50 }}>
            <Text>Sign In</Text>
          </Button>
          <Button block style={{margin:15,marginTop: 10 }} onPress={()=>this.props.navigation.navigate('Register')}
          
          >

            <Text>Register Here</Text>
          </Button>
          </Content>
        {/* </View> */}

      </View>
    
    );
  }
}
export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    marginTop: Expo.Constants.statusBarHeight,
    flex: 1,
  
  }


})