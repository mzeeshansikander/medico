import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button,Header, Left, Right, Icon,Body,Title,Container,Form,Input,Item,Label,Content } from 'native-base';
import { Font, AppLoading } from "expo";

class RegisterScreen extends Component {
 
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
        <Content>
       
       <Form>
           <Item fixedLabel>
             <Label>Username</Label>
             <Input />
           </Item>
           <Item fixedLabel>
             <Label>Email</Label>
             <Input />
           </Item>
           <Item fixedLabel>
             <Label>Password</Label>
             <Input />
           </Item>
           <Item fixedLabel>
             <Label>Confirm Password</Label>
             <Input />
           </Item>
           
         </Form>        
         <Button block style={{margin:15,marginTop: 50 }} onPress={()=>this.props.navigation.navigate('Register')}
         
         >

           <Text>Register</Text>
         </Button>
         </Content>

      </View>
    
    );
  }
}
export default RegisterScreen;
const styles = StyleSheet.create({
  container: {
    marginTop: Expo.Constants.statusBarHeight,
    flex: 1,
  
  }


})