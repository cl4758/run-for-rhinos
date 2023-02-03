import React, { useState } from 'react';
import Link from 'next/link';
import styled, { keyframes, css } from 'styled-components';
import { useRouter } from 'next/router';
import { IconMenu2 } from '@tabler/icons';

function DropdownMenu() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div>
      <button onClick={handleOpen}>Dropdown</button>
      {open ? <div>Is Open</div> : <div>Is Closed</div>}
    </div>
  );
}

