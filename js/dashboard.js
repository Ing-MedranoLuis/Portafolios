

const dashboard = document.getElementById('dashboard')
const coursesData = [
    { language: "C#", knowledge: 90, pernosalProjects: 6 },
    { language: "JAVASCRITP", knowledge: 60, pernosalProjects: 10 },
    { language: "REACT JS", knowledge: 50, pernosalProjects: 2 },
    { language: "CSS", knowledge: 80, pernosalProjects: 15 },
    { language: "HTML", knowledge: 90, pernosalProjects: 13 },
    { language: "BOOPSTRAP", knowledge: 75, pernosalProjects: 12 },
    { language: "SQL SERVER", knowledge: 90, pernosalProjects: 15 },
    { language: "AZURE", knowledge: 40, pernosalProjects: 6 },
    { language: "ADOBE PS", knowledge: 70, pernosalProjects: 30 },
];
Chart.defaults.font.size = 4;
let myChart2 = new Chart(dashboard, {
    type: "bar",

    data: {
        labels: coursesData.map((row) => row.language),
        color: "aliceblue",


        datasets: [
            {
                label: "# of Votes",
                data: coursesData.map((row) => row.knowledge),
                borderWidth: 1,
                backgroundColor: [
                    'aliceblue'
                ],
            },
        ],
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
            },
        },

    },
});