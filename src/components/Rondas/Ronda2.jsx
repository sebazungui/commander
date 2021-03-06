import React from 'react'
import { getTorneo } from '../../actions/torneos';
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { Paper, Typography, CircularProgress, Divider, TextField } from '@material-ui/core/';


const Ronda1 = () => {

    const { torneo, isLoading } = useSelector((state) => state.torneos);
    const classes = useStyles();
    const ronda2 = torneo.rondas[1];

    const DosMesas = () => {
        return <ul>
            <Typography variant="h4">Mesa 1</Typography>
            {ronda2.Mesas[0].Participantes.map((item, index) => {
                return <li key={index}>{item.name}</li>
            })}
            <Typography variant="h4">Mesa 2</Typography>
            {ronda2.Mesas[1].Participantes.map((item, index) => {
                return <li key={index}>{item.name}</li>
            })}
        </ul>
    }
    const TresMesas = () => {
        return <ul>
            <Typography variant="h4">Mesa 1</Typography>
            {ronda2.Mesas[0].Participantes.map((item, index) => {
                return <li key={index}>{item.name}</li>
            })}
            <Typography variant="h4">Mesa 2</Typography>
            {ronda2.Mesas[1].Participantes.map((item, index) => {
                return <li key={index}>{item.name}</li>
            })}
            <Typography variant="h4">Mesa 3</Typography>
            {ronda2.Mesas[2].Participantes.map((item, index) => {
                return <li key={index}>{item.name}</li>
            })}
        </ul>
    }

    const CuatroMesas = () => {
        return <ul>
            <Typography variant="h4">Mesa 1</Typography>
            {ronda2.Mesas[0].Participantes.map((item, index) => {
                return <li key={index}>{item.name}</li>
            })}
            <Typography variant="h4">Mesa 2</Typography>
            {ronda2.Mesas[1].Participantes.map((item, index) => {
                return <li key={index}>{item.name}</li>
            })}
            <Typography variant="h4">Mesa 3</Typography>
            {ronda2.Mesas[2].Participantes.map((item, index) => {
                return <li key={index}>{item.name}</li>
            })}
            <Typography variant="h4">Mesa 4</Typography>
            {ronda2.Mesas[3].Participantes.map((item, index) => {
                return <li key={index}>{item.name}</li>
            })}
        </ul>
    }

    const CincoMesas = () => {
        return <ul>
            <Typography variant="h4">Mesa 1</Typography>
            {ronda2.Mesas[0].Participantes.map((item, index) => {
                return <li key={index}>{item.name}</li>
            })}
            <Typography variant="h4">Mesa 2</Typography>
            {ronda2.Mesas[1].Participantes.map((item, index) => {
                return <li key={index}>{item.name}</li>
            })}
            <Typography variant="h4">Mesa 3</Typography>
            {ronda2.Mesas[2].Participantes.map((item, index) => {
                return <li key={index}>{item.name}</li>
            })}
            <Typography variant="h4">Mesa 4</Typography>
            {ronda2.Mesas[3].Participantes.map((item, index) => {
                return <li key={index}>{item.name}</li>
            })}
            <Typography variant="h4">Mesa 4</Typography>
            {ronda2.Mesas[4].Participantes.map((item, index) => {
                return <li key={index}>{item.name}</li>
            })}
        </ul>
    }

    return (
        <div>
            <Typography variant="h2">Ronda 2</Typography>
            {(ronda2.Mesas.length === 2) && (
                <DosMesas />
            )}
            {(ronda2.Mesas.length === 3) && (
                <TresMesas />
            )}
            {(ronda2.Mesas.length === 4) && (
                <CuatroMesas />
            )}
            {(ronda2.Mesas.length === 5) && (
                <CincoMesas />
            )}

        </div>
    )
}


export default Ronda1;