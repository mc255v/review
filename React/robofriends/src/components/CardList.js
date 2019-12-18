import React, {Component} from 'react';
import Card from './Card';

class CardList extends Component {
    render() {
        const robots = this.props.robots;
        return(
            <div>
                {
                    robots.map((user, index) => {
                        return (<Card 
                            key={robots[index].id} 
                            id={robots[index].id} 
                            name={robots[index].name} 
                            email={robots[index].email}
                            />
                        );
                    })
                }
            </div>
        );
    }
}

export default CardList;