import styled from 'styled-components/native';

import { Circle, CheckCircle, Trash } from 'phosphor-react-native';

export const Container = styled.View`
    background-color: #0D0D0D;
    padding-top: 32px;
    padding-bottom: 32px;
    padding-right: 24px;
    padding-left: 24px;
`

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 20px;
    border-bottom: 2px solid;
    border-bottom-width: 1px;
    border-bottom-color: #333333;
`

export const Created = styled.View`
    flex-direction: row;
`

export const CreatedText = styled.Text`
    color: #4EA8DE;
    margin-right: 8px;
    font-weight: bold;
    font-size: 14px;
`

export const Number = styled.Text`
    background-color: #333;
    color: #D9D9D9;
    border-radius: 99px;
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 2px;
    padding-bottom: 2px;
    font-size: 12px;
    font-weight: bold;
`

export const Done = styled.View`
    flex-direction: row;
`

export const DoneText = styled.Text`
    color: #8284FA;
    margin-right: 8px;
    font-weight: bold;
    font-size: 14px;
`

export const List = styled.View`
    margin-top: 8px;
`
export const Card = styled.View`
    flex-direction: row;
    align-items: center;
    background-color: #262626;
    border-width: 1px;
    border-color: #333;
    padding: 12px;
    border-radius: 8px;
    margin-bottom: 8px;
`
export const CardText = styled.Text`
    font-size: 14px;
    color: #F2F2F2;
    flex: 1;
`
export const CardTextChecked = styled.Text`
    text-decoration-line: line-through;
    text-decoration-style: solid;
    font-size: 14px;
    color: #F2F2F2;
    flex: 1;
`

export const UncheckedIcon = styled(Circle).attrs(() => ({
    color: '#4EA8DE',
    size: 17,
}))`
    margin-right: 8px;
`

export const CheckedIcon = styled(CheckCircle).attrs(() => ({
    color: '#5E60CE',
    size: 17,
}))`
    margin-right: 8px;
`

export const TrashIcon = styled(Trash).attrs(() => ({
    color: '#808080',
    size: 17,
}))`
    margin-left: 8px;
`

