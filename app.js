 import React, { Component } from 'react';
 import { AppRegistry, StyleSheet, Modal, Image, Platform } from 'react-native';
 import { Spinner, Text, View, Content, Container, Header, Title, Button, Icon, InputGroup, Input, ListItem, List, Radio, CheckBox, Thumbnail, Card, CardItem, H3 } from 'native-base';

 class RepoFinder extends Component {

    render() {

        var that = this;
        return (
            <Text>Hello, React!</Text>
          )
        }
 };

AppRegistry.registerComponent('RepoFinder', () => RepoFinder);
