import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSideBar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import RecentTransactions from '@/components/RecentTransactions'

import { getAccount, getAccounts } from '@/lib/actions/bank.actions'
import { getLoggedInUser } from '@/lib/actions/user.actions'

const Home = async ({ searchParams: { id, page } }: SearchParamProps) => {
  const currentPage = Number(page as string) || 1
  const loggedIn = await getLoggedInUser()
  if (!loggedIn || !loggedIn.$id) {
    throw new Error('Invalid user ID')
  }

  const user = await getLoggedInUser()
  if (user.role === 'guest') {
    throw new Error('User does not have the required permissions.')
  }
  const accounts = await getAccounts({
    userId: loggedIn.$id,
  })

  console.log('accounts', accounts)
  console.log('accounts', accounts)
  console.log('accounts', accounts)

  if (!accounts) return

  const accountsData = accounts?.data
  const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId

  const account = await getAccount({ appwriteItemId })

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type='greeting'
            title='Welcome'
            user={loggedIn?.firstName || 'Guest'}
            subtext='Access and manage your account and transactions efficiently.'
          />

          <TotalBalanceBox
            accounts={[accountsData]}
            totalBanks={accounts?.totalBanks}
            totalCurrentBalance={accounts?.totalCurrentBalance}
          />
        </header>

        <RecentTransactions
          accounts={accountsData}
          transactions={account?.transactions}
          appwriteItemId={appwriteItemId}
          page={currentPage}
        />
      </div>

      <RightSidebar
        user={loggedIn}
        transactions={accounts?.transactions}
        banks={accountsData?.slice(0, 2)}
      />
    </section>
  )
}

export default Home
