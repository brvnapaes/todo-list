import * as S from './styles';

export function Input(){
    return (
        <S.Container>
            <S.Input 
                placeholder='Adicione uma nova tarefa'
                placeholderTextColor='#808080'
            />
            <S.Button>
                <S.Icon />
            </S.Button>
        </S.Container>
    )
}