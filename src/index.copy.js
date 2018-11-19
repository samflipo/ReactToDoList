class App extends Component {

    constructor(props) {
        super(props);
        this.appRemoveAll = this.appRemoveAll.bind(this);
        this.appAddNote = this.appAddNote.bind(this);
        this.appDeleteNote = this.appDeleteNote.bind(this);

        this.state = {
            studyNotes: [
                'Work on JavaScript Tutorials',
                'Create sample projects before weekend',
                'Focus on REACT & REDUX Tutorials'],
            videos: []
        };

        YTSearch({key: API_KEY, term: 'shopping'}, (videos) => {
          this.setState({videos});
        });
    }

    appRemoveAll() {
        console.log("Removing All Notes...");
        this.setState(() => {
            return {
                studyNotes: []
            }
        });
    }

    appAddNote(note) {
        if (!note) {
            console.log('Note should not be blank!');
        } else if (this.state.studyNotes.indexOf(note) > -1) {
            console.log('Note alreaday exists, add another Note!');
        } else {
            this.setState((prevState) => {
                return {
                    studyNotes: prevState.studyNotes.concat([note])
                }
            });
        }
    }

    appDeleteNote(note) {
        console.log('Deleting Note...');
        this.setState((prevState) => {
            console.log('Deleting Note: ' + note + ' at index: ' + prevState.studyNotes.indexOf(note));
            prevState.studyNotes.splice(prevState.studyNotes.indexOf(note), 1);
            return {
                studyNotes: prevState.studyNotes
            }
        });
    }

    render() {
        const title = 'Notes Of My Study Plan';
        const description = 'For mastering my React & JavaScript skills';

        return (
            <div>
                <Header title={title} description={description} />
                <Notes
                    notes={this.state.studyNotes}
                    deleteNote={this.appDeleteNote}/>
                <Action
                    removeAll={this.appRemoveAll}
                    addNote={this.appAddNote} />
                <ShoppingList />
                <SearchBar />
                <VideoList videos={this.state.shoppingVideos}/>
              //  <VideoDetail/>
            </div>
        );
    }
}

class Header extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <h4>{this.props.description}</h4>
            </div>
        );
    }
}

class Notes extends Component {
    render() {
        return (
            <div>
                Study Notes:
                <ol>
                    {this.props.notes.map(note =>
                        <li key={note}>
                            <Note
                                note={note}
                                deleteNote={this.props.deleteNote} />
                        </li>
                    )}
                </ol>
            </div>
        );
    }
}

class Note extends Component {
    constructor(props) {
        super(props);
        this.deleteData = this.deleteData.bind(this);
    }

    deleteData() {
        this.props.deleteNote(this.props.note);
    }

    render() {
        return (
            <div>
                {this.props.note}
                <button onClick={this.deleteData} style={{ margin: 5 }}>Remove</button>
            </div>
        );
    }
}

class Action extends Component {
    constructor(props) {
        super(props);
        this.addData = this.addData.bind(this);
    }

    addData(e) {
        e.preventDefault();
        console.log('Adding new Note...');

        const note = e.target.elements.data.value;
        this.props.addNote(note);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addData}>
                    <input type="text" name="data" />
                    <button>Add</button>
                </form>

                <br />
                <button onClick={this.props.removeAll}>Remove All</button>
            </div>
        );
    }
}

class ShoppingList extends Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for my Study</h1>
        <ul>
          <li>Purchasing labtop</li>
          <li>Create website</li>
          <li>Buying books</li>
        </ul>
        <form>
            <input type="text" name="data" />
            <button>Add</button>
        </form>
      </div>
    );
  }
  // createAlertAdded = function(){
  //   alert('it works, a shopping is added!');
  // }
}

class SearchBar extends Component {

  render() {
    return (
      <div>
          <h1>Searching from youtube videos</h1>
          <input onChange={event => console.log(event.target.value)} />
      </div>

    );
  }
}

const VideoList = (props) => {
  // const videoItems = props.videos.map((video) => {
  //   return <VideoListItem key={video.etag} video={video} />
  // });
// const videoItems =  props.videos.map((video) => {
//     return <VideoListItem video={video} />
//   });
 const videoItems = 8;
  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

const VideoListItem = ({video}) => {
  const imageUrl = video.snippet.thumbnails.default.url;
  return (
    <li className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-left" />
        </div>
        <div className="media-body">
          <div className="media-heading">
          </div>
        </div>
      </div>
    </li>
  );
}

const VideoDetail = ({video}) => {
  return (
    <div className="video-detail col-md-8">
      <div  className="embed-responsive ember-responsive-16by9">
        <iframe className="embed-responsive-item"> </iframe>
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
