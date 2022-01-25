
function HeaderSearch({styles}) {
  return (
    <div className={styles.search}>
        <input className={styles.searchInput} type="text"  placeholder="Pretraži mange"/>
    </div>
  );
}

export default HeaderSearch;
