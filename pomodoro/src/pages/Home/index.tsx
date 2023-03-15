import { Play } from 'phosphor-react'
import { CountDownContainer, FormContainer, HomeContainer, Separator } from './styles'

export function Home() {
    return (
        <HomeContainer>
            <form>
                <FormContainer>

                    <label htmlFor="task"> Vou trabalhar em</label>
                    <input id='task'></input>

                    <label htmlFor="minutesAmount"> durante</label>
                    <input type='number' id="minutesAmount"></input>

                    <span>minutos</span>

                </FormContainer>

                <CountDownContainer>
                    <span>0</span>
                    <span>0</span>

                    <Separator>:</Separator>

                    <span>0</span>
                    <span>0</span>
                </CountDownContainer>

            </form>

            <button type="submit">
                <Play size={24} />
                Comerçar
            </button>

        </HomeContainer>
    )
}