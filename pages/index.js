import fetch from "isomorphic-fetch";
import Error from 'next/error';

class Index extends React.Component {

    static async getInitialProps() {
        // Declare variable outside of try catch scope
        let stories;
        // try-catch for api call
        try {
            const response = await fetch(
                'https://node-hnapi.herokuapp.com/news?page=1'
            );
            
            stories = await response.json();
        } catch (err) {
            console.log(err);
            stories = [];
        }
        

        return { stories };
    }

    render() {
        const { stories } = this.props;
        
        if (stories.length === 0) {
            return <Error statusCode={503} />
        }

        return (
            <div>
                <h1>hacker next</h1>
                <div>
                    {stories.map(story => (
                      <h2>{story.title}</h2>  
                    ))}
                </div>
            </div>
        )
    }
}

export default Index;