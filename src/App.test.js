import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Main from './components/main';

describe('react testing Main file', () => {
  test('renders main block', () => {
    render(<Main />);
    const mainWrapperDiv = screen.getByTestId('main-wrapper-element');
    expect(mainWrapperDiv).toBeInTheDocument(); 
  })
  test('renders main centre block', () => {
    render(<Main />);
    const mainWrapperCentre = screen.getByTestId('main-wrapper-centre');
    expect(mainWrapperCentre).toBeInTheDocument(); 
  })
  test('renders ItemRows divs', () => {
    render(<Main />);
    const itemRows = screen.getAllByTestId('item-row-wrapper');
    expect(itemRows.length).toBe(6); 
  })
  test('renders questions block divs', () => {
    render(<Main />);
    const QuestionsBlocks = screen.getAllByTestId('item-row-question-block');
    expect(QuestionsBlocks.length).toBe(30);
  })
  test('renders team block divs', () => {
    render(<Main />);
    const TeamBlocks = screen.getAllByTestId('team-wrapper');
    expect(TeamBlocks.length).toBe(2);
  })
  test('teams always have names', () => {
    render(<Main />);
    const QuestionsBlocks = screen.getAllByTestId('item-row-question-block'); // находит массив вопросов (30 шт)
    fireEvent.click(QuestionsBlocks[0]); // нажимает на первый элемент массива и проверяет, что поле с названиями команд не пустое
    const teamOneElement = screen.getByTestId('team-one');
    const teamTwoElement = screen.getByTestId('team-two');
    expect(teamOneElement).toBeInTheDocument();
    expect(teamOneElement.textContent).toBeTruthy();
    expect(teamTwoElement).toBeInTheDocument();
    expect(teamTwoElement.textContent).toBeTruthy();
  })
});



