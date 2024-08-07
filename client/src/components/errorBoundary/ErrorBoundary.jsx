import { Component } from 'react';
import SomethingWentWrong from './SomethingWentWrong';

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false,
            message: '',
        };
    }

    static getDerivedStateFromError(err) {
        console.log(err);
        return { message: err.message };
    }

    render() {
        if (this.state.hasError) {
            return <SomethingWentWrong />;
        }
        return this.props.children;
    }
}
