function jourTravaille(date) {
    const joursFeries2024 = [
        new Date(2024, 0, 1),
        new Date(2024, 3, 1),
        new Date(2024, 4, 1),
        new Date(2024, 4, 8),
        new Date(2024, 4, 20),
        new Date(2024, 6, 14),
        new Date(2024, 7, 15),
        new Date(2024, 10, 1),
        new Date(2024, 10, 11),
        new Date(2024, 11, 25)
    ];

    const days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
    const month = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

    const jourSemaine = days[date.getDay()];
    const jour = date.getDate();
    const mois = month[date.getMonth()];
    const année = date.getFullYear();
    
    for (const jourFerie of joursFeries2024) {
        if (date.getTime() === jourFerie.getTime()) {
            console.log(`Le ${jourSemaine} ${jour} ${mois} ${année} est un jour férié`);
            return;
        }
    }

    if (date.getDay() === 0 || date.getDay() === 6) {
        console.log(`Non, Le ${jourSemaine} ${jour} ${mois} ${année} est un samedi ou un dimanche`);
        return;
    }

    console.log(`Oui, Le ${jourSemaine} ${jour} ${mois} ${année} est un jour travaillé`);
}

jourTravaille(new Date(2024, 0, 1));
jourTravaille(new Date(2024, 3, 14));
jourTravaille(new Date(2024, 3, 15));
jourTravaille(new Date(2024, 11, 24));
jourTravaille(new Date(2024, 11, 25));
