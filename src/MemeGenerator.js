import React from 'react'
import './App.css';

class MemeGenerator extends React.Component {
    constructor() {
        super()
        this.state = {
            topText: '',
            bottomText: '',
            middleText: '',
            topLeft: '',
            bottomLeft: '',
            topRight: '',
            bottomRight: '',
            left: '',
            right: '',
            randomImage: 'https://i.imgflip.com/28j0te.jpg',
            isLoading: false,
            color: '',
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
                console.log(data)
                this.setState({
                    apiData: data.data.memes,
                    isLoading: false
                })
            }
            )
    }


    // componentDidMount() {
    //     this.setState({ isLoading: true })
    //     fetch('https://api.covid19api.com/summary')
    //         .then((response) => response.json())
    //         .then((data) => {
    //             console.log(data)
    //             console.log(data.Countries[0])
    //             console.log('Name:' + '  '+ data.Countries[0].Country)
    //             console.log('New Confirmed:' + '  '+ data.Countries[0].NewConfirmed)
    //             console.log('Total Deaths:' + '  '+ data.Countries[0].TotalDeaths)
    //             console.log('New Deaths:' + '  '+ data.Countries[0].NewDeaths)

    //             // this.setState({
    //             //     apiData: data.data.memes,
    //             //     isLoading: false
    //             // })
    //         }
    //         )
    // }

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
        
        const myStyleBlack={
            color: 'black',
        }

        const myStyleWhite={
            color: 'white',
        }

        return (
            <div>
                <center>
                    {/* <img src={this.state.randomImage} alt="Meme_Image" /> */}
                    <form onSubmit={this.handleSubmit}>
                        <table>
                            <tbody>
                                <tr>
                                    <td colSpan="2"><h2>Type your Meme Text</h2><br /></td>
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

                                <tr>
                                    <td>
                                        <label>
                                            Left Text:
                                        </label>
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            name="left"
                                            value={this.state.left
                                            }
                                            onChange={this.handleChange}
                                        />
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <label>
                                            Right Text:
                                        </label>
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            name="right"
                                            value={this.state.right
                                            }
                                            onChange={this.handleChange}
                                        />
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <label>
                                            Middle Text:
                                        </label>
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            name="middleText"
                                            value={this.state.middleText}
                                            onChange={this.handleChange}
                                        />
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <label>
                                            Top Left Text:
                                        </label>
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            name="topLeft"
                                            value={this.state.topLeft}
                                            onChange={this.handleChange}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>
                                            Bottom Left Text:
                                        </label>
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            name="bottomLeft"
                                            value={this.state.bottomLeft}
                                            onChange={this.handleChange}
                                        />
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <label>
                                            Top Right Text:
                                        </label>
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            name="topRight"
                                            value={this.state.topRight}
                                            onChange={this.handleChange}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>
                                            Bottom Right Text:
                                        </label>
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            name="bottomRight"
                                            value={this.state.bottomRight}
                                            onChange={this.handleChange}
                                        />
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <label>
                                            Select Text color :
                                        </label>
                                    </td>
                                    <td className="colorLabelTd">
                                        <input
                                            type="radio"
                                            name="color"
                                            value="black"
                                            checked={this.state.color==="black"}
                                            onChange={this.handleChange}
                                         />
                                         <label className="colorLabel mr-rt"> Black</label>
                                        {/* <br/> */}
                                        <input
                                            type="radio"
                                            name="color"
                                            value="white"
                                            checked={this.state.color==="white"}
                                            onChange={this.handleChange}
                                        />
                                        <label className="colorLabel"> White</label>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                        <button>MemePlease</button>
                    </form>

                </center>

                <div id="meme">
                    <img className="meme_img" src={this.state.randomImage} style={{ marginTop: "4%" }} alt="Meme" />
                    <p className="meme-text-top" style={this.state.color==="black"?myStyleBlack:myStyleWhite}>{this.state.topText}</p>
                    <p className="meme-text-bottom" style={this.state.color==="black"?myStyleBlack:myStyleWhite}>{this.state.bottomText}</p>
                    <p className="meme-text-middle" style={this.state.color==="black"?myStyleBlack:myStyleWhite}>{this.state.middleText}</p>
                    <p className="meme-text-top-left" style={this.state.color==="black"?myStyleBlack:myStyleWhite}>{this.state.topLeft}</p>
                    <p className="meme-text-bottom-left" style={this.state.color==="black"?myStyleBlack:myStyleWhite}>{this.state.bottomLeft}</p>
                    <p className="meme-text-left" style={this.state.color==="black"?myStyleBlack:myStyleWhite}>{this.state.left}</p>
                    <p className="meme-text-right" style={this.state.color==="black"?myStyleBlack:myStyleWhite}>{this.state.right}</p>
                    <p className="meme-text-top-right" style={this.state.color==="black"?myStyleBlack:myStyleWhite}>{this.state.topRight}</p>
                    <p className="meme-text-bottom-right" style={this.state.color==="black"?myStyleBlack:myStyleWhite}>{this.state.bottomRight}</p>
                </div>
            </div>

        )
    }
}

export default MemeGenerator