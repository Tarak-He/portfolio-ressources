import React from 'react';
import { render } from '@testing-library/react';

import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText, Chip } from 'react-mdl';


export class Browse extends React.Component {

    items = [
        {
            id: 1,
            name: 'Premier projet',
            date: '03/03/2003',
            tag1:`I'm baby raclette master cleanse selvage edison bulb lumbersexual man bun iPhone mlkshk shoreditch bespoke freegan mumblecore. Paleo shaman palo santo poke church-key PBR&B. Affogato pok pok kogi meditation yr, fam dreamcatcher polaroid drinking vinegar beard jianbing.`,
            technos : ['HTML', 'CSS', 'Javascript', 'React'],
            previewImg: 'img/1.png'
        },
        {
            id: 2,
            name: 'Second projet',
            date: '02/05/2006',
            tag1:`I'm baby raclette master cleanse selvage edison bulb lumbersexual man bun iPhone mlkshk shoreditch bespoke freegan mumblecore. Paleo shaman palo santo poke church-key PBR&B. Affogato pok pok kogi meditation yr, fam dreamcatcher polaroid drinking vinegar beard jianbing.`,
            technos : ['Wordpress', 'Javascript', 'React'],
            previewImg: 'img/2.png'
        },
        {
            id: 3,
            name: 'Projet 3eme',
            date: '13/12/2013',
            tag1:'Projet dev',
            technos : ['PHP', 'mySQL', 'Photoshop', 'Illustrator'],
            previewImg: 'img/3.png'
        },
        {
            id: 4, date: '15/08/2014',
            name: '4eme projet',
            tag1:'Ressource dev',
            technos : ['HTML', 'CSS', 'Javascript'],
            previewImg: 'img/4.png'
        },
        {
            id: 5, date: '15/07/2016',
            name: 'Cinquième',
            tag1:'Jeu',
            technos : ['HTML', 'CSS', 'Javascript', 'React'],
            previewImg: 'img/5.png'
        },
        {
            id: 6, date: '01/02/2020',
            name: 'Sixième projet',
            tag1:'Jeu',
            technos : ['HTML', 'CSS', 'Javascript'],
            previewImg: 'img/6.png'
        }
    ];


    state = {
        activeTab: 0
    };



    render() {

        let ShowAllItems = this.items.map((item, index) => {
            return (
                <Card shadow={5} style={{minWidth: '450', margin: '3rem'}} key={index}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(' + item.previewImg + ') center / cover' }}>
                        {item.name}
                    </CardTitle>
                    <CardText>
                        <p>{item.tag1}</p>
                            {item.technos.length > 0 && <Chip>{item.technos[0]}</Chip>}
                            {item.technos.length > 1 && <Chip>{item.technos[1]}</Chip>}
                            {item.technos.length > 2 && <Chip>{item.technos[2]}</Chip>}
                            {item.technos.length > 3 && <Chip>{item.technos[3]}</Chip>}
                    </CardText>
                    <CardActions border style={{marginTop:'auto'}}>
                        <Button href="#" colored>GitHub</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
            )
            
        })

        return (
            <div className="browse">
                <header className="lib-header">
                    <h1>Bibliothèque</h1>
                </header>

                <section className="projects-grid">
                    {ShowAllItems}
                </section>

                







            </div> //end of first div



        ) //end of return
    } //end of render
} //end of function

export default Browse;