import Module from './components/Module';
export default Module;

/**
 *
 *
 * @Text_button (low emphasis):
 * Text buttons are typically used for less important actions.
 * @Outlined_Button (medium emphasis):
 * Outlined buttons are used for more emphasis than text buttons due to the stroke.
 * @Contained_button (high emphasis):
 * Contained buttons have more emphasis, as they use use a color fill and shadow.
 */
export enum Mode {
    Text,
    Outlined,
    Contained,
}
