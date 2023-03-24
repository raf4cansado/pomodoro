import { HistoryContainer, HistoryListy, Status } from "./styled";

export function History() {
    return (
        <HistoryContainer>
            <HistoryListy>
                <table>
                    <thead>
                        <tr>
                            <th>Tarefa</th>
                            <th>Duração</th>
                            <th>Inicio</th>

                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Tarefa</td>
                            <td>20 minuos</td>
                            <td>Há 2 meses</td>
                            <td>
                                <Status statusColor='red'>
                                    Interrompido
                                </Status>
                            </td>
                        </tr>
                        <tr>
                            <td>Tarefa</td>
                            <td>20 minuos</td>
                            <td>Há 2 meses</td>
                            <td>
                                <Status statusColor="yellow">
                                    Em procesamento
                                </Status>
                            </td>
                        </tr>
                        <tr>
                            <td>Tarefa</td>
                            <td>20 minuos</td>
                            <td>Há 2 meses</td>
                            <td>
                                <Status statusColor="green">
                                    Concluído
                                </Status>
                            </td>
                        </tr>
                        <tr>
                            <td>Tarefa</td>
                            <td>20 minuos</td>
                            <td>Há 2 meses</td>
                            <td>
                            <Status statusColor="green">
                                    Concluído
                                </Status>
                            </td>
                        </tr>
                        <tr>
                            <td>Tarefa</td>
                            <td>20 minuos</td>
                            <td>Há 2 meses</td>
                            <td>
                            <Status statusColor="green">
                                    Concluído
                                </Status>
                            </td>
                        </tr>
                        <tr>
                            <td>Tarefa</td>
                            <td>20 minuos</td>
                            <td>Há 2 meses</td>
                            <td>
                                <Status statusColor="yellow">
                                    Em procesamento
                                </Status>
                            </td>
                        </tr>
                        <tr>
                            <td>Tarefa</td>
                            <td>20 minuos</td>
                            <td>Há 2 meses</td>
                            <td>
                                <Status statusColor="yellow">
                                    Em procesamento
                                </Status>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </HistoryListy>
        </HistoryContainer>
    )
}