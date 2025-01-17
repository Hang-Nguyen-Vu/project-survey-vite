import PropTypes from "prop-types";

export const FitnessGoal = ({goal, onChangeText}) => {
  return (
    <div className="fitness-goal">     
      <label>
        What is your fitness goal?
        <textarea 
          name="fitness-goal" 
          rows={3} 
          cols={30} 
          placeholder="I aim to..." 
          value={goal}
          onChange={onChangeText}
        />
      </label>
    </div>
  );
};

FitnessGoal.propTypes = {
  goal: PropTypes.string,
  onChangeText: PropTypes.func
};