import styled from 'styled-components/native';

import { ListChecks } from 'phosphor-react-native';

export const Container = styled.View`
    background-color: #0D0D0D;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 70px;
    margin-bottom: 24px;
    font-weight: bold;
`

export const Icon = styled(ListChecks).attrs(() => ({
    color: '#5E60CE',
    size: 40,
}))`
    margin-right: 10px;
`

export const Title = styled.Text`
    font-size: 40px;
    color: #4EA8DE;
    font-weight: bold;
`

export const Purple = styled.Text`
    color: #5E60CE;
`

