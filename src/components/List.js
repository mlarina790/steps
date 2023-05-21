import Item from './Item';

export default function List(props) {
    const { workouts, setWorkouts } = props;

    return (
        <ul className="list">
            <div>
                <div className="list-header">
                    <span>Дата (ДД.ММ.ГГ)</span>
                    <span>Пройдено км</span>
                    <span>Действия</span>
                </div>
            </div>
            <div className="list-wrap">
                {workouts
                    .sort((a, b) => b.date > a.date ? 1 : -1)
                    .map((workout) => {
                        return (
                            <Item
                                key={workout.id}
                                id={workout.id}
                                date={workout.date}
                                distance={workout.distance}
                                workouts={workouts}
                                setWorkouts={setWorkouts}
                            />
                        );
                    })}
            </div>
        </ul>
    );
}
