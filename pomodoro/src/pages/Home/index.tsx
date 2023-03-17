import { Play } from 'phosphor-react'
import { CountDownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCountDownButton, TaskInput } from './styles'

export function Home() {
    return (
        <HomeContainer>
            <form>
                <FormContainer>

                    <label htmlFor="task"> Vou trabalhar em</label>
                    <TaskInput id='task' placeholder='Dê um nome para o seu projeto'></TaskInput>

                    <label htmlFor="minutesAmount"> durante</label>
                    <MinutesAmountInput type='number' id="minutesAmount" placeholder='00'></MinutesAmountInput>

                    <span>minutos</span>

                </FormContainer>

                <CountDownContainer>
                    <span>0</span>
                    <span>0</span>

                    <Separator>:</Separator>

                    <span>0</span>
                    <span>0</span>
                </CountDownContainer>

                <StartCountDownButton type="submit">
                    <Play size={24} />
                    Comerçar
                </StartCountDownButton>
            </form>

        </HomeContainer>
    )
}