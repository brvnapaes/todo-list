import * as S from './styles';

export function ToDos(){
    return (
        <S.Container>
            <S.Header>
                <S.Created>
                    <S.CreatedText>
                        Criadas
                    </S.CreatedText>
                    <S.Number>
                        0
                    </S.Number>
                </S.Created>
                <S.Done>
                    <S.DoneText>
                        Concluídas
                    </S.DoneText>
                    <S.Number>
                        1
                    </S.Number>
                </S.Done>
            </S.Header>
            <S.List>
                <S.Card>
                    <S.UncheckedIcon />
                    <S.CardText>
                        Integer urna interdum massa libero auctor neque turpis turpis semper.
                    </S.CardText>
                    <S.TrashIcon/>
                </S.Card>
                <S.Card>
                    <S.CheckedIcon/>
                    <S.CardTextChecked>
                        Integer urna interdum massa libero auctor neque turpis turpis semper.
                    </S.CardTextChecked>
                    <S.TrashIcon/>
                </S.Card>
            </S.List>
        </S.Container>
    )
}