import React from 'react';

export default class MoviesListShort extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            loaded: false,
            data: []
        };

        this.url = '';
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        if (this.url) {
            this.setState({ 
                loading: true,
                loaded: false,
                data: []
            })

            fetch(this.url)
                .then(response => response.json())
                .then(data => {
                    this.setState({ 
                        loaded: true,
                        data: data
                    })
                })
                .finally(this.setState({
                    loading: false
                }));
        }
    }

    render() {

        let content = (
            <div className="message">
                <div className="loader"><div></div><div></div><div></div><div></div></div>
                Loading
            </div>
        )
        if (!this.state.loading && this.state.loaded) {
            content = (
                <>
                    <ul>
                        <li>
                            The Shawshank redemption                            
                            <div className="rating">9.2</div>
                        </li>
                        <li>
                            The Godfather                            
                            <div className="rating">9.2</div>
                        </li>
                        <li>
                            The Godfather II                            
                            <div className="rating">9.0</div>
                        </li>
                        <li>
                            Dark Knight                            
                            <div className="rating">8.9</div>
                        </li>
                        <li>
                            12 angry men                            
                            <div className="rating">8.9</div>
                        </li>
                        <li>
                            Schindler's list                            
                            <div className="rating">8.9</div>
                        </li>
                        <li>
                            Pulp fiction                            
                            <div className="rating">8.9</div>
                        </li>
                        <li>
                            Lord of the Rings: Return of the King                            
                            <div className="rating">8.9</div>
                        </li>
                        <li>
                            The good, the bad and the ugly                            
                            <div className="rating">8.9</div>
                        </li>
                        <li>
                            Fight club                            
                            <div className="rating">8.8</div>
                        </li>
                    </ul>
                </>
            )
        }
        
        return (
            <section className="top-rated">

                <h2>Top rated movies & shows</h2>

                { content }

            </section>
        );
    }
}