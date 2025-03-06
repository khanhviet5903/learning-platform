import React, {useState} from 'react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs= [
        {
            question: 'Was ist ILIAS?',
            answer: 'ILIAS ist eine Lernplattform, die von verschiedenen deutschen Universitäten verwendet wird, um Kurse und Lernmaterialen online bereitzustellen.',
        },
        {
            question: 'Wie kann ich beim ILIAS anmelden?'
            answer: 'Um sich bei ILIAS anzumelden, nutzen Sie die Daten, die mit Ihnen durch Email verteilt werden. Bei weiteren Fragen wenden Sie sich an Techischer Support von der Uni', 
        },
        {
            question: 'Was tun ich im Falle von technischen Problemen?'
            answer: 'Bei technischen Problemen wende Sie sich an den Support unter dieser Telefonnummer: 0221-470 1358', 
        }, 
        {
            question: 'Fragen bei ILIAS Kursen',
            answer: 'Für Fragen zu spezifischen Kursen kontaktieren Sie bitte den jeweiligen Kursleiter oder Dozenten.',
        },
    ];
    
