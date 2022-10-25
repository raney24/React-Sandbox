import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  SkillTreeGroup,
  SkillTree,
  SkillProvider,
  SkillType,
  SkillGroupDataType,
  SavedDataType,
} from 'beautiful-skill-tree';

import { basics } from './hardcodedTree';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <SkillProvider>
        <SkillTreeGroup>
          {(skillCount) => {
            return (
              <>
                <SkillTree
                  treeId="construct3basics"
                  title="Skill Tree"
                  description="First skill tree"
                  data={basics}
                />
              </>
            )
          }}
        </SkillTreeGroup>
      </SkillProvider>
      </header>
    </div>
  );
}

export default App;
