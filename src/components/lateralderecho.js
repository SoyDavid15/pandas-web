import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function LateralDerecho({ delitos }) {
  // 1. Procesar los datos para el gráfico
  const getMonthlyCounts = () => {
    const monthlyCounts = Array(12).fill(0); // Array para los 12 meses
    delitos.forEach(delito => {
      if (delito.timestamp && delito.timestamp.toDate) {
        const date = delito.timestamp.toDate();
        const month = date.getMonth(); // 0 = Enero, 1 = Febrero, etc.
        monthlyCounts[month]++;
      }
    });
    return monthlyCounts;
  };

  const labels = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  
  const chartData = {
    labels,
    datasets: [
      {
        label: 'Delitos por Mes',
        data: getMonthlyCounts(),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        borderColor: 'rgba(53, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: 'white' // Color para las etiquetas de la leyenda
        }
      },
      title: {
        display: true,
        text: 'Cantidad de Delitos Reportados por Mes',
        color: 'white' // Color para el título
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: 'white', // Color para los números del eje Y
          stepSize: 1 // Asegura que la escala vaya de 1 en 1 si son pocos datos
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)' // Color de las líneas de la cuadrícula
        }
      },
      x: {
        ticks: {
          color: 'white' // Color para las etiquetas del eje X (meses)
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        }
      }
    }
  };

  return (
    <div className='LateralDerecho'>
        <div className="Emergencia">
          <h2>Alertas de emergencia</h2>
        </div>
      <div className="Estadisticas">
        <h2>Estadísticas</h2>
        <div style={{ position: 'relative', height: '80%', width: '90%', margin: 'auto' }}>
          <Bar options={options} data={chartData} />
        </div>
      </div>
    </div>
  )
}

export default LateralDerecho;
