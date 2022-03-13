import React from "react";


import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer'
import { create } from "react-test-renderer";
import { Dimensions } from "react-native";
import avatar from '../SafeMove/src/component/image/avatar.png';

import { Feather } from "@expo/vector-icons";
import {
    Profile,
    Message,
    Activity,
} from "./src/component/screens";

const DrawerNavigator = createDrawerNavigator({
    Profile,
    Message,
    Activity,
})
export default createAppContainer(DrawerNavigator);