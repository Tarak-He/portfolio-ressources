import React from 'react';

export class Resume extends React.Component {

    copyCodeToClipboard = () => {
        let el = this.textArea;
        el.select();
        document.execCommand('copy');
    }

    render() {
        return (

            <section id="resumeContainer">
                <div id="resumeTopButtons">
                    <a href="https://drive.google.com/file/d/1ijqQPhURSKZjfUMiNWy9-FwY4IkX5Ii7/view?usp=sharing"><i className="fab fa-google-drive"></i> Télécharger au format PDF</a>
                    <a href="#"><i class="fab fa-github"></i> Code source</a>
                </div>



                <div id="htmlResume">


                    <div id="resumeLeftBar">
                        <div>
                            <img src="img/resume/profile.png" alt=""/>
                        </div>

                        <div id="resumeInfos">
                            <h3>Tarak Hentati</h3>

                            <div>
                                <h4>Téléphone :</h4>
                                <div id="phonebox">
                                    <p><textarea ref={ (textarea) => this.textArea = textarea } value="06 11 61 81 02" /></p>
                                    <button onClick={this.copyCodeToClipboard}>
                                        Copier
                                    </button>
                                </div>
                            </div>

                            <div>
                                <h4>Website :</h4>
                                <p>https://tarak-hentati.web.app</p>
                            </div>

                            <div>
                                <h4>LinkedIn  :</h4>
                                <p>https://linkedin.com/in/tarak-hentati-dev/</p>
                            </div>

                            <div>
                                <h4>Adresse  :</h4>
                                <p>13, rue Sauffroy, Paris 75017</p>
                            </div>

                            <div>
                                <h4>Né le  :</h4>
                                <p>27/12/1990 (29 ans)</p>
                            </div>

                            <div>
                                <h4>Compétence supplémentaires</h4>
                                <p>- Social Media Management</p>
                                <p>- Marketing digital</p>
                                <p>- Résolution des problèmes</p>
                                <p>- Data driven decisions</p>
                                <p>- Teamwork</p>
                                <p>- Communication</p>
                                <p>- Rédaction d'articles FR/ANG</p>
                                <p>- Orthographe impeccable</p>
                                <p>- Permis de conduire B</p>
                            </div>
                        </div>
                    </div>

                    <div id="resumeRightBar">
                        <div>
                            <h1>Developpeur web full-stack junior </h1>
                            <p>
                            Tout juste sorti d'une formation au sein du Campus Paris de l’école La Passerelle, je dois réaliser un projet pour valider mon diplome RNCP II en intégrant une entreprise en tant que développeur web. J'aimerais également m'engager à long terme pour continuer à développer mes compétences
                            </p>
                        </div>
                        <span/>

                            {/* #################################################################################"" */}
                            {/* #############################     COMPETENCES    ################################"" */}
                            {/* #################################################################################"" */}


                        <div>
                            <h3>Compétences</h3>
                        </div>

                        <div id="skills">
                            
                            <table>
                                <thead>
                                    <tr>
                                        <th>Opérationnelles</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>
                                            <p>- React.js</p>
                                            <p>- Javascript</p>
                                            <p>- Symfony 5</p>
                                            <p>- PHP, MySQL</p>
                                        </td>
                                        <td>
                                            <p>- HTML5</p>
                                            <p>- CSS3/SASS</p>
                                            <p>- Bootstrap</p>
                                            <p>- Wordpress</p>
                                        </td>
                                        <td>
                                            <p>- Firebase GCP</p>
                                            <p>- Adobe Photoshop + Illustrator</p>
                                            <p>- Git, Gitlab</p>
                                            <p>- XAMPP, phpMyAdmin</p>
                                        </td>
                                    </tr>
                                </tbody>







                                <thead>
                                    <tr>
                                        <th colSpan="3">Montées en compétences souhaitées</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>
                                            <p>- React Native</p>
                                            <p>- Node.js</p>
                                            <p>- Vue.js</p>
                                        </td>
                                        <td>
                                            <p>- Flutter</p>
                                            <p>- AngularJS</p>
                                            <p>- socket.io</p>
                                        </td>
                                        <td>
                                            <p>- NGINX</p>
                                            <p>- ASP.NET MVC</p>
                                            <p>- Laravel</p>
                                        </td>
                                    </tr>
                                </tbody>


                            </table>


                        </div>
        
                        <span/>
        
                            {/* #################################################################################"" */}
                            {/* ##############################     FORMATION    #################################"" */}
                            {/* #################################################################################"" */}

                        <div>
                            <h3>Formation</h3> 
                        </div>

                        <div id="formation">
                            <div>
                                <div>
                                    <h4>École La Passerelle, Paris Xᵉ</h4>
                                    <h5>Développement web et web mobile</h5>
                                </div>
                                <div>
                                    <img src="img/logo-11.png" alt="ecole-la-passerelle"/>
                                    <p><a>https://lapasserelle.school</a></p>
                                </div>
                            </div>

                            <div>
                                <p>Création et développement de sites web responsives avec React et Symfony en appliquant les recommandations et bonnes pratiques, autant individuellement qu'en équipe.</p>
                            </div>
                        </div>

                            {/* #################################################################################"" */}
                            {/* #############################     EXPERIENCE    #################################"" */}
                            {/* #################################################################################"" */}

                        <div>
                            <h3>Experiences</h3> 
                        </div>

                        <div id="experiences">
                                    {/* ################### E-TAXI ################### */}
                            <div>
                                <div>
                                    <h4>E-Taxi Tunisie</h4>
                                    <h5>Co-fondateur et créateur du site</h5>
                                </div>

                                <div>
                                    <img src="img/logo-22.png" alt="logo-e-taxi"/>
                                    <p><a href="#">https://www.etaxi.tn</a></p>
                                </div>
                            </div>

                            <div>
                                <p>- Création et conception du site www.etaxi.tn , une plateforme de transport B2B / B2C.</p>
                                <p>- Design, UI/UX, campagnes d’acquisition d’utilisateurs et de partenaires.</p>
                                <p>- Webadmin, social media manager, comptabilité et facturation.</p>
                                {/* <span><p>J'ai tout appris à faire tout seul</p></span> */}
                            </div>


                                {/* ################### VINYL ################### */}

                            <div>
                                <div>
                                    <h4>Projet de fin de formation</h4>
                                    <h5>École La Passerelle, Paris Xᵉ</h5>
                                </div>
                                <div>
                                    <img src="img/logo-24.svg" alt="logo-vinyl"/>
                                    <p><a>https://tarak.dev/vinyl-app/</a></p>
                                </div>
                            </div>

                            <div>
                                <p>Développement d’une plateforme musicale en ligne</p>
                                <p>Symfony 5 + React JS    •    Javascript, PHP, MySQL    •    HTML, CSS, Bootstrap</p>
                            </div>
                        </div>


                            {/* ################# LANGUES ################# */}
                        <section id="misc">
                            <div>
                                <div>
                                    <h4>Langues parlées</h4>
                                </div>

                                <div>
                                    <h5>Couramment</h5>
                                    <p>Français, anglais</p>
                                    <h5>Notions</h5>
                                    <p>Espagnol</p>
                                </div>
                            </div>


                            {/* ################# CENTRE D'INTERETS ################# */}

                            <div>
                                <div>
                                    <h4>Centres d'intérêt</h4>
                                </div>

                                <div>
                                    <p>- Passionné d'informatique depuis toujours, je design des logos, des sites, et j'écris des articles.</p>
                                    <p>- Musique (guitare, batterie) : blues, rock, metal, j'ai été prof de musique et membre de plusieurs groupes</p>
                                    <p>- Gaming : les classiques CS 1.6, WoW, W3TFT, AoE, LoL, FM, etc...</p>
                                </div>
                            </div>

                        </section>





                        {/* ############ Close #resumeRightBar ############ */}
                    </div>











                </div>

            </section>

        )
    }
}

export default Resume;