import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Accordion, AccordionPanel, Box, Button, Form, FormField, Grid, Select, TextInput, Text } from 'grommet';
import { AddCircle } from 'grommet-icons';

export default class TimingAdd extends Component {
  static propTypes = {
    products: PropTypes.array.isRequired,
    concepts: PropTypes.array.isRequired,
    onAddTime: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      product: '',
      concept: '',
      time: 0
    };
  }

  submit() {
    const { onAddTime } = this.props;
    onAddTime(this.state);
  }

  render() {
    const { products, concepts } = this.props;
    const { product, concept, time } = this.state;

    return (
      <Box elevation={ "small" } direction={ "row" } background={ "light-4" }>
        <Accordion>
          <AccordionPanel label={
            <Box pad={ "small" } direction={ "row" } gap={ "small" }>
              <AddCircle/>
              <Text>Add time</Text>
            </Box>
          }>
            <Box align={ "baseline" }>
              <Form>
                <Grid
                  rows={ ["flex"] }
                  columns={ ["flex", "flex", "flex", "flex"] }
                  gap={ 'small' }
                  fill={ "horizontal" }
                  areas={ [
                    { name: 'product-select', start: [0, 0], end: [0, 0] },
                    { name: 'concept-select', start: [1, 0], end: [1, 0] },
                    { name: 'time-input', start: [2, 0], end: [2, 0] },
                    { name: 'submit-button', start: [3, 0], end: [3, 0] }
                  ] }
                >
                  <Box gridArea={ "product-select" }>
                    <FormField label={ "Product" }>
                      <Select
                        placeholder={ "Choose..." }
                        options={ products }
                        value={ product }
                        valueKey={ "id" }
                        labelKey={ "name" }
                        onChange={ ({ value: { id } }) => this.setState({ product: id }) }
                      />
                    </FormField>
                  </Box>
                  <Box gridArea={ "concept-select" }>
                    <FormField label={ "Concept" }>
                      <Select
                        placeholder={ "Choose..." }
                        options={ concepts }
                        value={ concept }
                        valueKey={ "id" }
                        labelKey={ "name" }
                        onChange={ ({ value: { id } }) => this.setState({ concept: id }) }
                      />
                    </FormField>
                  </Box>
                  <Box gridArea={ "time-input" }>
                    <FormField label={ "Time" }>
                      <TextInput
                        type={ "number" }
                        min={ "0" }
                        max={ "99" }
                        autoComplete={ "off" }
                        value={ time }
                        onChange={ ({ target: { value } }) => this.setState({ time: value }) }
                      />
                    </FormField>
                  </Box>
                  <Box gridArea={ "submit-button" } align={ "baseline" }>
                    <Button
                      label={ "save" }
                      onClick={ () => this.submit() }
                    />
                  </Box>
                </Grid>
              </Form>
            </Box>
          </AccordionPanel>
        </Accordion>
      </Box>
    );
  }
}
