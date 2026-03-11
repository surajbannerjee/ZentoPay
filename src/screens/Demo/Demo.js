import React from 'react'
import { Text } from 'react-native'
import { Styles } from './Style'
import { useSelector } from 'react-redux';
import { selectToken, selectUser } from '../../redux/reducers/authReducer';

const Demo = ({ navigation }) => {
    const user = useSelector(selectUser);
    const token = useSelector(selectToken);

    // console.log('Current User:', user);
    // console.log('Current Token:', token);

    return (
        <Text>Demo</Text>
    )
}

export default Demo