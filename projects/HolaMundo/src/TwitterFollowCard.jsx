export function TwitterFollowCard({children, userName='unknown' , isFollowing}) {
  console.log(isFollowing)
  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-avatar'
          alt="Foto"
          src={`../images/${userName}.png`}
        />
        <div className='tw-followCard-info'>
          <strong>{children}</strong>
          <span className='tw-followCard-infoUserName'> @{userName}</span>
        </div>
      </header>

      <aside>
        <button className='tw-followCard-button'>
            Seguir
        </button>
      </aside>
    </article>
  );
}
