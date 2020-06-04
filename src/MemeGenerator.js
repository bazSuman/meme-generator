import React from 'react'
import './App.css';

class MemeGenerator extends React.Component {
    constructor() {
        super()
        this.state = {
            topText: '',
            bottomText: '',
            randomImage: 'http://i.imgflip.com/1bij.jpg',
            isLoading: false,
            apiData: []
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        this.setState({ isLoading: true })
        fetch('https://api.imgflip.com/get_memes')
            .then((response) => response.json())
            .then((data) => {
                // console.log(data)
                this.setState({
                    apiData: data.data.memes,
                    isLoading: false
                })
            }
            )
    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        this.setState(() => {
            var items = this.state.apiData
            var item = items[Math.floor(Math.random() * items.length)];
            let newImage = item.url
            console.log(newImage)
            return {
                randomImage: newImage
            }

        })

    }

    render() {
        // console.log(this.state.apiData)
        // let memeData = this.state.apiData.map((x) => console.log(x.url))
        // console.log(this.state.apiData.length)
        return (
            <div>
                <center>
                    {/* <img src={this.state.randomImage} alt="Meme_Image" /> */}
                    <form onSubmit={this.handleSubmit}>
                        <table>
                            <tbody>
                                <tr>
                                    <td colSpan="2"><h2>Type your Meme Text</h2><br/></td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>
                                            Top Text:
                                        </label>
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            name="topText"
                                            value={this.state.topText}
                                            onChange={this.handleChange}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>
                                            Bottom Text:
                                        </label>
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            name="bottomText"
                                            value={this.state.bottomText
                                            }
                                            onChange={this.handleChange}
                                        />
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                        <button>MemePlease</button>
                    </form>

                </center>

                <div id="meme">
                    <img className="meme_img" src={this.state.randomImage} style={{marginTop:"4%"}}></img>
                    <p className="meme-text-top" style={{ position: "absolute", color: '#ffffff', fontWeight: 'bolder', fontSize: '34px'}}>{this.state.topText}</p>
                    <p className="meme-text-bottom" style={{ position: "absolute", color: '#ffffff', fontWeight: 'bolder', fontSize: '34spx'}}>{this.state.bottomText}</p>
                </div>
            </div>

        )
    }
}

export default MemeGenerator