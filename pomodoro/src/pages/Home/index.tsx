import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { CountDownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCountDownButton, TaskInput } from './styles'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'



export function Home() {
    const validacao = zod.object({
        task: zod.string().min(1, 'Informe a tarefa'),
        minutesAmount: zod.number().min(1).max(60)
    })

    const { register, watch, handleSubmit, formState } = useForm( {
        resolver: zodResolver(validacao)
    } )

    function handleCreateNewCycle (event: any)  {
        console.log(event)
    }

    console.log(formState.errors)
    return (
        <HomeContainer>
            <form onSubmit={handleSubmit(handleCreateNewCycle)} action=''>
                <FormContainer>

                    <label htmlFor="task"> Vou trabalhar em</label>
                    <TaskInput id='task' placeholder='Dê um nome para o seu projeto'
                    {...register('task')}
                     />

                    <datalist>

                    </datalist>
                    <label htmlFor="minutesAmount"> durante</label>
                    <MinutesAmountInput type='number' id="minutesAmount" placeholder='00'
                    {...register('minutesAmount', {valueAsNumber: true}) }
                    />

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