import React, {Component } from 'react';
import { reduxForm } from 'redux-form';


class SurveyForm extends Component{

    render(){
        return(
            <div>
                Survey Form
            </div>
        );
    }
}
const asd  = reduxForm({
    form:'surveyForm'
});
export default asd(SurveyForm);