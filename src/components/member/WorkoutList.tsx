import React from 'react'
import { AddRecordButton } from '@/styles/AddButton'
import { styled } from 'styled-components'
import { WorkoutType } from '@/app/member/main/page'
import { WorkoutPayload } from '@/redux/reducers/workoutRecordSlice'

const WorkoutListBox = styled.div`
  li {
    display: flex;
    padding: 0.625rem 0;
    margin-bottom: 0.625rem;
    &:not(:last-child) {
      border-bottom: 1px solid var(--border-gray300);
    }
    >div {
      &:first-child {
        width: 40px;
        height: 40px;
        background-color: var(--purple50);
        border-radius: 0.5rem;
        margin-right: 0.625rem;
        overflow: hidden;
        text-indent: -999px;
      }
      &:last-child {
        .workout-contents {
          font-size: 12px;
          color: var(--font-gray700);
        }
      }
    }
  }
`

interface Props {
  workout: WorkoutType[] | WorkoutPayload[]
}

const WorkoutList = ({ workout }: Props) => {
  if (workout.length > 0)
  return (
    <WorkoutListBox>
      <div>
        <ul>
          {
            workout?.map((workout, index) => {
              return (
                <li key={index}>
                  <div>이미지</div>
                  <div>
                    <div>{workout.title}</div>
                    <div className='workout-contents'>{workout.set}</div>
                  </div>
                </li>
              )
            })
          }
        </ul>
        {/* <AddRecordButton
          onClick={handleAddWorkout}
          style={{
            height: "48px",
          }}
        /> */}
      </div>
    </WorkoutListBox>
  )
}

export default WorkoutList