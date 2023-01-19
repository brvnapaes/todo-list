import styled from 'styled-components/native';

import { PlusCircle } from "phosphor-react-native";

export const Container = styled.View`
    background-color: #0D0D0D;
    flex-direction: row;
    padding-right: 24px;
    padding-left: 24px;
`

export const Input = styled.TextInput`
    flex: 1;
    background-color: #262626;
    color: #FFF;
    height: 54px;
    border-radius: 6px;
    font-size: 16px;
    padding: 16px;
    margin-right: 4px;
`
export const Button = styled.TouchableOpacity`
    width: 52px;
    height: 52px;
    background-color: #1E6F9F;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
`

export const Icon = styled(PlusCircle).attrs(() => ({
    color: '#F2F2F2',
    size: 16,
}))``
