import React from 'react';
import { Button } from 'react-bootstrap';
import HtmlToReact from 'html-to-react';


export default class TemplateNew extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      campaign: '',
      name: '',
      body: '',
      subject: ''
    };
  }

  handleSubmit() {
  }

  handleChange(e) {
    const newState = {...this.state,
      [e.target.name]: e.target.value
    };

    this.setState(newState);
  }

  render() {
    // Need to wrap the html to ensure there is only 1 root element
    const rawHtml = '<div>' + this.state.body + '</div>';
    const htmlToReactparser = new HtmlToReact.Parser(React);
    const htmlPreview = htmlToReactparser.parse(rawHtml);

    return (
      <div>
        <div className="content-header">
          <h1>New Template <small>Create a new campaign template</small></h1>
        </div>

        <section className="content">
          <div className="box box-primary">
            <div className="box-header with-border">
              <h3 className="box-title">Content editor</h3>
            </div>

            <div className="box-body">
              <form role="form" onChange={this.handleChange.bind(this)}>
                <div className="form-group">
                  <div className="row">
                    <div className="col-md-6">
                      <label htmlFor="">Template name</label>
                      <input value={this.state.name} name="name" type="text" className="form-control"/>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="">Subject</label>
                      <input value={this.state.subject} name="subject" type="text" className="form-control"/>
                    </div>
                  </div>

                  <br/>
                  <div className="row">
                    <div className="col-md-12">
                      <h5>Dynamic fields: {'{{email}}'}</h5>
                    </div>
                  </div>

                  <br/>
                  <div className="nav-tabs-custom">
                    <ul className="nav nav-tabs">
                      <li className="active"><a href="#tab_1" data-toggle="tab">HTML</a></li>
                      <li><a href="#tab_2" data-toggle="tab">Preview</a></li>
                    </ul>
                    <div className="tab-content">
                      <div className="tab-pane active" id="tab_1">
                        <textarea value={this.state.body}  name="body" style={{resize: "none"}} className="form-control" rows="15"/>
                      </div>
                      <div className="tab-pane" id="tab_2">
                        { htmlPreview }
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div className="box-footer">
              <Button className="pull-right" bsStyle="primary" type="submit" onClick={this.handleSubmit.bind(this)}>Save</Button>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

